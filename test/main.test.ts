import { random, uuid } from '../src/index'

describe('生成数字范围内的随机数', () => {
  it('random(1, 1) -> should return 1', () => {
    const rand = random(1, 1)
    expect(rand).toBe(1)
  })
  it('random(1, 10) -> should return number between 1 and 10', () => {
    const rand = random(1, 10)
    expect(typeof rand).toBe('number')
    expect(rand).toBeGreaterThanOrEqual(1)
    expect(rand).toBeLessThanOrEqual(10)
  })
})

describe('生成uuid', () => {
  it('uuid() -> should return length 36', () => {
    const id = uuid()
    expect(id).toHaveLength(36)
  })
  it('uuid() -> should match uuid v4 format', () => {
    const id = uuid()
    expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)
  })
})
