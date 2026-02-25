/**
 * 判断相关工具函数
 */

/**
 * 判断是否为数组
 * @param input 任意值对象
 * @returns boolean
 */
export function isArray(input: any): boolean {
  return Array.isArray(input)
}

/**
 * 判断是否为空（undefined、null、空字符串、空数组、空对象）
 * @param input 任意值对象
 * @returns boolean
 */
export function isEmpty(input: any): boolean {
  if (input === undefined || input === null || input === '') return true
  if (Array.isArray(input)) return input.length === 0
  if (typeof input === 'object') return Object.keys(input).length === 0
  return false
}

/**
 * 判断是否为数字
 * @param input 任意值对象
 * @returns boolean
 */
export function isNumber(input: any): boolean {
  return typeof input === 'number' && !isNaN(input)
}
