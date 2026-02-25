/**
 * 基本常用工具函数
 */

/**
 * 生成数字范围内的随机数
 * @param min 最小数字
 * @param max 最大数字
 * @returns number类型
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 生成uuid
 * @returns string 类型 df2367fb-1d9d-4bc5-8bbc-55a1166a2e5d
 */
export function uuid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  const s: string[] = []
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.charAt(Math.floor(Math.random() * 0x10))
  }
  s[14] = '4'
  s[19] = hexDigits.charAt((parseInt(s[19], 16) & 0x3) | 0x8)
  s[8] = s[13] = s[18] = s[23] = '-'
  return s.join('')
}
