/** 한국 전화번호 형식 검증 (클라이언트/서버 공용) */
export function isValidKoreanPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s-]/g, "");
  const mobileRegex = /^01[016789]\d{7,8}$/;
  const seoulRegex = /^02\d{7,8}$/;
  const localRegex = /^0[3-6][1-9]\d{7,8}$/;
  const tollFreeRegex = /^(080|1[5-9]\d{2}|15\d{2})\d{4,6}$/;
  return mobileRegex.test(cleaned) || seoulRegex.test(cleaned) || localRegex.test(cleaned) || tollFreeRegex.test(cleaned);
}
