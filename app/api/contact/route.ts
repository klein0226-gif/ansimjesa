import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "inquiries.json");

// 암호화 키: 환경변수에서 읽음 (32바이트 hex = 64자)
// 미설정 시 랜덤 키 생성하여 파일에 저장 (초기 세팅용)
function getEncryptionKey(): Buffer {
  const envKey = process.env.INQUIRY_ENCRYPTION_KEY;
  if (envKey && envKey.length === 64) {
    return Buffer.from(envKey, "hex");
  }
  // 로컬 키 파일 폴백 (프로덕션에서는 반드시 환경변수 사용)
  const keyFile = path.join(DATA_DIR, ".encryption_key");
  if (fs.existsSync(keyFile)) {
    return Buffer.from(fs.readFileSync(keyFile, "utf-8").trim(), "hex");
  }
  const newKey = crypto.randomBytes(32);
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(keyFile, newKey.toString("hex"), { mode: 0o600 });
  return newKey;
}

function encrypt(text: string): string {
  const key = getEncryptionKey();
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const encrypted = Buffer.concat([cipher.update(text, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  // iv:tag:encrypted (모두 hex)
  return `${iv.toString("hex")}:${tag.toString("hex")}:${encrypted.toString("hex")}`;
}

function decrypt(data: string): string {
  const key = getEncryptionKey();
  const [ivHex, tagHex, encHex] = data.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const tag = Buffer.from(tagHex, "hex");
  const encrypted = Buffer.from(encHex, "hex");
  const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(encrypted), decipher.final()]).toString("utf8");
}

interface EncryptedInquiry {
  id: string;
  name: string;       // 암호화됨
  phone: string;      // 암호화됨
  service: string;
  message: string;    // 암호화됨
  privacyAgreed: boolean;
  sensitiveAgreed: boolean;
  consentAt: string;
  createdAt: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, service, message, privacyAgreed, sensitiveAgreed } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "성함과 연락처는 필수입니다." },
        { status: 400 }
      );
    }

    // 동의 검증 — 서버단 강제
    if (privacyAgreed !== true || sensitiveAgreed !== true) {
      return NextResponse.json(
        { error: "개인정보 처리방침 및 민감정보 처리에 모두 동의해야 합니다." },
        { status: 400 }
      );
    }

    // 입력값 길이 제한
    if (name.length > 50 || phone.length > 20 || (service && service.length > 100) || (message && message.length > 2000)) {
      return NextResponse.json(
        { error: "입력값이 너무 깁니다." },
        { status: 400 }
      );
    }

    // Ensure data directory exists
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    // Read existing inquiries
    let inquiries: EncryptedInquiry[] = [];
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      inquiries = JSON.parse(raw);
    }

    // 개인정보 암호화 후 저장
    const now = new Date().toISOString();
    const inquiry: EncryptedInquiry = {
      id: `inq_${Date.now()}`,
      name: encrypt(name),
      phone: encrypt(phone),
      service: service || "",
      message: message ? encrypt(message) : "",
      privacyAgreed: true,
      sensitiveAgreed: true,
      consentAt: now,
      createdAt: now,
    };
    inquiries.push(inquiry);

    // Save
    fs.writeFileSync(DATA_FILE, JSON.stringify(inquiries, null, 2), "utf-8");

    return NextResponse.json({ success: true, id: inquiry.id });
  } catch {
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

// 복호화 유틸 (관리자 조회용 — 추후 관리자 API에서 사용)
export { decrypt };
