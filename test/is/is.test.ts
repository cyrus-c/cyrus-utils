import { isArray, isEmpty, isNumber } from '../../src/index'

describe('判断是否为数组', () => {
  it('isArray({})) -> should return false', () => {
    expect(isArray({})).toBe(false)
  })
  it('isArray([])) -> should return true', () => {
    expect(isArray([])).toBe(true)
  })
})

describe('判断是否为空', () => {
  it('isEmpty(54)) -> should return false', () => {
    expect(isEmpty(54)).toBe(false)
  })
  it('isEmpty(null)) -> should return true', () => {
    expect(isEmpty(null)).toBe(true)
  })
  it('isEmpty(undefined)) -> should return true', () => {
    expect(isEmpty(undefined)).toBe(true)
  })
  it('isEmpty("")) -> should return true', () => {
    expect(isEmpty('')).toBe(true)
  })
  it('isEmpty([])) -> should return true', () => {
    expect(isEmpty([])).toBe(true)
  })
  it('isEmpty({})) -> should return true', () => {
    expect(isEmpty({})).toBe(true)
  })
  it('isEmpty(0)) -> should return false', () => {
    expect(isEmpty(0)).toBe(false)
  })
})

describe('判断是否为数字', () => {
  it('isNumber("456")) -> should return false', () => {
    expect(isNumber('456')).toBe(false)
  })
  it('isNumber(123)) -> should return true', () => {
    expect(isNumber(123)).toBe(true)
  })
  it('isNumber(NaN)) -> should return false', () => {
    expect(isNumber(NaN)).toBe(false)
  })
})
