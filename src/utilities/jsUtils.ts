export function generateRandomString(length: number): string {
  const charset = "अआइईउऊऋॠऌॡएऐओऔकखगघचछजझटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञ";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }

  return result;
}
