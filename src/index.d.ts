/**
 * 生成数字范围内的随机数
 * @param min 最小数字
 * @param max 最大数字
 */
export declare function random(min: number, max: number): number

/**
 * 生成uuid
 * @returns string 类型 df2367fb-1d9d-4bc5-8bbc-55a1166a2e5d
 */
export declare function uuid(): string

/**
 * 时间字符串转换为时间戳
 * @param dateStr 字符串格式为 2017-02-10 18:20:30
 */
export declare function getTimestamp(dateStr: string): number

/**
 * 日期格式化
 * @param date Date类型 new Date()
 * @param fmt 格式化类型 yyyy-MM-dd hh:mm:ss
 */
export declare function format(date: Date, fmt: string): string

/**
 * 转换音视频时长，把秒数转换为 HH:MM:SS 格式
 * @param duration 音视频时长（秒）
 */
export declare function makeDuration(duration: number): string

/**
 * 转换时间字符串为大致时间描述
 * @param date 日期字符串：2022-03-29 09:08:11
 */
export declare function makeChTime(date: string): string

/**
 * 转换数字为大致数字描述
 * @param value 数字：1001
 */
export declare function makeChNumber(value: number): string

/**
 * 计算两个日期相差天数
 * @param dateStart 开始日期
 * @param dateEnd 结束日期
 */
export declare function diffDays(dateStart: Date, dateEnd: Date): number

/**
 * 判断是否为数组
 * @param input 任意值对象
 */
export declare function isArray(input: any): boolean

/**
 * 判断是否为空（undefined、null、空字符串、空数组、空对象）
 * @param input 任意值对象
 */
export declare function isEmpty(input: any): boolean

/**
 * 判断是否为数字
 * @param input 任意值对象
 */
export declare function isNumber(input: any): boolean

/**
 * 根据key获取浏览器url参数
 * @param name 参数key
 * @param url 可选，默认使用 window.location.href
 */
export declare function getUrlVal(name: string, url?: string): string | null

/**
 * 转换浏览器url参数为键值对对象
 * @param url 浏览器url，例如 ?title=你好url&test=true
 */
export declare function parseUrlValToJson(url: string): Record<string, string>

/**
 * 存储localStorage
 * @param name key值
 * @param content value值
 */
export declare function setLocal(name: string, content: any): void

/**
 * 获取localStorage
 * @param name key值
 */
export declare function getLocal(name: string): string | null

/**
 * 删除localStorage
 * @param name key值
 */
export declare function removeLocal(name: string): void

/**
 * 存储sessionStorage
 * @param name key值
 * @param content value值
 */
export declare function setSession(name: string, content: any): void

/**
 * 获取sessionStorage
 * @param name key值
 */
export declare function getSession(name: string): string | null

/**
 * 删除sessionStorage
 * @param name key值
 */
export declare function removeSession(name: string): void
