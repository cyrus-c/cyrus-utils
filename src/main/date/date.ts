/**
 * 常用日期相关工具函数
 */

/**
 * 时间字符串转换为时间戳
 * @param dateStr 字符串格式为 2017-02-10 18:20:30
 * @returns 时间戳
 */
export function getTimestamp(dateStr: string): number {
  return new Date(dateStr.replace(' ', 'T')).getTime()
}

/**
 * @param date Date类型 new Date()
 * @param fmt 格式化类型 yyyy-MM-dd hh:mm:ss
 * @returns 时间字符串 2022-03-29 17:22:30
 */
export function format(date: Date, fmt: string): string {
  const o: Record<string, number> = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  }
  const yearMatch = fmt.match(/(y+)/)
  if (yearMatch) {
    fmt = fmt.replace(yearMatch[1], (date.getFullYear() + '').substring(4 - yearMatch[1].length))
  }
  for (const k in o) {
    const match = fmt.match(new RegExp('(' + k + ')'))
    if (match) {
      fmt = fmt.replace(
        match[1],
        match[1].length === 1 ? String(o[k]) : ('00' + o[k]).substring(String(o[k]).length)
      )
    }
  }
  return fmt
}

/**
 * 转换音视频时长，把秒数转换为：HH:MM:SS格式
 * @param duration 音视频时长（秒）：120
 * @returns 时间字符串：02:00
 */
export function makeDuration(duration: number): string {
  const h = Math.floor(duration / 3600)
  const m = Math.floor((duration / 60) % 60)
  const s = Math.floor(duration % 60)
  const pad = (n: number): string => (n < 10 ? '0' + n : String(n))
  let res = ''
  if (h > 0) {
    res += pad(h) + ':'
  }
  res += pad(m) + ':' + pad(s)
  return res
}

/**
 * 转换时间字符串为大致时间描述
 * @param date 日期：2022-03-29 09:08:11
 * @returns 时间字符串：1个月前
 */
export function makeChTime(date: string): string {
  const inDate = new Date(date.replace(' ', 'T'))
  const curDate = new Date()
  const diff = curDate.getTime() - inDate.getTime()
  if (diff < 0) return date

  const MINUTE = 60 * 1000
  const HOUR = 60 * MINUTE
  const DAY = 24 * HOUR
  const YEAR = 365 * DAY

  if (diff >= 2 * YEAR) {
    return inDate.getFullYear() + '年' + (inDate.getMonth() + 1) + '月' + inDate.getDate() + '日'
  }
  if (diff >= YEAR) {
    return '1年前'
  }

  let months = (curDate.getFullYear() - inDate.getFullYear()) * 12 + (curDate.getMonth() - inDate.getMonth())
  if (curDate.getDate() < inDate.getDate()) {
    months--
  }
  if (months >= 1) {
    return months + '个月前'
  }

  const days = Math.floor(diff / DAY)
  if (days >= 1) {
    return days + '天前'
  }

  const hours = Math.floor(diff / HOUR)
  if (hours >= 1) {
    return hours + '小时前'
  }

  const minutes = Math.floor(diff / MINUTE)
  if (minutes >= 1) {
    return minutes + '分钟前'
  }

  return '刚刚'
}

/**
 * 转换数字为大致数字描述
 * @param value 数字：1001
 * @returns 数字字符串：1千
 */
export function makeChNumber(value: number): string {
  if (value < 1000) return String(value)

  let fr = 1000
  let num = 3
  while (value / fr >= 1) {
    fr *= 10
    num += 1
  }

  let text1 = ''
  let fm = 1

  if (num <= 4) {
    return Math.floor(value / 1000) + '千'
  } else if (num <= 8) {
    text1 = (num - 4) / 3 > 1 ? '千万' : '万'
    fm = text1 === '万' ? 10000 : 10000000
    const n = value % fm === 0 ? String(Math.floor(value / fm)) : (value / fm).toFixed(1)
    return n + text1
  } else if (num <= 16) {
    text1 = (num - 8) / 3 > 1 ? '千亿' : '亿'
    text1 = (num - 8) / 4 > 1 ? '万亿' : text1
    text1 = (num - 8) / 7 > 1 ? '千万亿' : text1
    if (text1 === '亿') fm = 100000000
    else if (text1 === '千亿') fm = 100000000000
    else if (text1 === '万亿') fm = 1000000000000
    else if (text1 === '千万亿') fm = 1000000000000000
    const n = value % fm === 0 ? String(Math.floor(value / fm)) : (value / fm).toFixed(2)
    return n + text1
  }

  return String(value)
}

/**
 * 计算日期相差天数
 * @param dateStart 开始日期
 * @param dateEnd 结束日期
 * @returns 相差天数
 */
export function diffDays(dateStart: Date, dateEnd: Date): number {
  const diffTime = Math.abs(dateEnd.getTime() - dateStart.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}
