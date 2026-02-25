import { format, makeChNumber, makeChTime, makeDuration, diffDays } from '../../src/index'

describe('日期格式化', () => {
  it('format(new Date(), "yyyy-MM-dd hh:mm:ss") -> should return length 19', () => {
    const str = format(new Date(), 'yyyy-MM-dd hh:mm:ss')
    expect(str).toHaveLength(19)
  })
  it('format(new Date(), "yyyy-MM-dd hh:mm:ss") -> should contain dash', () => {
    const str = format(new Date(), 'yyyy-MM-dd hh:mm:ss')
    expect(str).toContain('-')
  })
})

describe('转换数字为大致数字描述', () => {
  it(`makeChNumber(155) -> should return 155`, () => {
    expect(makeChNumber(155)).toBe('155')
  })
  it(`makeChNumber(3787) -> should return 3千`, () => {
    expect(makeChNumber(3787)).toBe('3千')
  })
  it(`makeChNumber(2889988) -> should return 289.0万`, () => {
    expect(makeChNumber(2889988)).toBe('289.0万')
  })
})

describe('转换时间字符串为大致时间描述', () => {
  const date1 = new Date()
  date1.setMonth(date1.getMonth() - 2)
  const time1 = format(date1, 'yyyy-MM-dd hh:mm:ss')
  it(`makeChTime("${time1}") -> should return 2个月前`, () => {
    const result = makeChTime(time1)
    expect(result).toBe('2个月前')
  })

  const date2 = new Date()
  const time2 = format(date2, 'yyyy-MM-dd hh:mm:ss')
  it(`makeChTime("${time2}") -> should return 刚刚`, () => {
    const result = makeChTime(time2)
    expect(result).toBe('刚刚')
  })
})

describe('转换音视频时长', () => {
  it(`makeDuration(155) -> should return 02:35`, () => {
    expect(makeDuration(155)).toBe('02:35')
  })
  it(`makeDuration(3787) -> should return 01:03:07`, () => {
    expect(makeDuration(3787)).toBe('01:03:07')
  })
  it(`makeDuration(0) -> should return 00:00`, () => {
    expect(makeDuration(0)).toBe('00:00')
  })
})

describe('计算日期相差', () => {
  const date1 = new Date('2022-12-31')
  const date2 = new Date('2023-01-02')
  it(`diffDays("${date1}","${date2}") -> should return 2`, () => {
    expect(diffDays(date1, date2)).toBe(2)
  })
})
