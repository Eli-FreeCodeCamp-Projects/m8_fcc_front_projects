import { expect, test } from 'vitest'
import { ut } from '../src/utils/utils.js'

test('test toFixedFloat method', () => {
    expect(ut.toFixedFloat(1.05235646546)).toBe(1.05)
    expect(ut.toFixedFloat(1.05235646546, 3)).toBe(1.052)
    expect(ut.toFixedFloat(0)).toBe(0)
    expect(ut.toFixedFloat(1)).toBe(1)
    expect(ut.toFixedFloat('hello')).toBe(null)
    expect(ut.toFixedFloat('hello', 2, 0)).toBe(0)
})

test('test isFunction method', () => {
    const funcTest = ()=>{return true;}
    expect(ut.isFunction(funcTest)).toBe(true)
    expect(ut.isFunction({})).toBe(false)
    expect(ut.isFunction({a: 1})).toBe(false)
    expect(ut.isFunction("hello")).toBe(false)
    expect(ut.isFunction(['a'])).toBe(false)
    expect(ut.isFunction(2)).toBe(false)
})

test('test isObject method', () => {
    expect(ut.isObject({})).toBe(true)
    expect(ut.isObject({a: 1})).toBe(true)
    expect(ut.isObject("hello")).toBe(false)
    expect(ut.isObject(['a'])).toBe(false)
    expect(ut.isObject(2)).toBe(false)
})

test('test isArray method', () => {
    expect(ut.isArray([])).toBe(true)
    expect(ut.isArray(['a'])).toBe(true)
    expect(ut.isArray("hello")).toBe(false)
    expect(ut.isArray({a: 1})).toBe(false)
    expect(ut.isArray(2)).toBe(false)
})

test('test isNumber method', () => {
    expect(ut.isNumber(0)).toBe(true)
    expect(ut.isNumber(0.1)).toBe(true)
    expect(ut.isNumber([0.1])).toBe(true)
    expect(ut.isNumber(-10)).toBe(true)
    expect(ut.isNumber("hello")).toBe(false)
    expect(ut.isNumber({a: 1})).toBe(false)
    expect(ut.isNumber([2, 3])).toBe(false)
})


test('test isPositiveNumber method', () => {
    expect(ut.isPositiveNumber(1)).toBe(true)
    expect(ut.isPositiveNumber(0.1)).toBe(true)
    expect(ut.isPositiveNumber([0.1])).toBe(true)
    expect(ut.isPositiveNumber(0)).toBe(false)
    expect(ut.isPositiveNumber(-10)).toBe(false)
    expect(ut.isPositiveNumber("hello")).toBe(false)
    expect(ut.isPositiveNumber({a: 1})).toBe(false)
    expect(ut.isPositiveNumber([2, 3])).toBe(false)
})

test('test isStr method', () => {
    expect(ut.isStr("1")).toBe(true)
    expect(ut.isStr("Hello world")).toBe(true)
    expect(ut.isStr(`hello`)).toBe(true)
    expect(ut.isStr(``)).toBe(true)
    expect(ut.isStr(0)).toBe(false)
    expect(ut.isStr(-10)).toBe(false)
    expect(ut.isStr({a: 1})).toBe(false)
    expect(ut.isStr([2, 3])).toBe(false)
})
test('test isStrNotEmpty method', () => {
    expect(ut.isStrNotEmpty("1")).toBe(true)
    expect(ut.isStrNotEmpty("Hello world")).toBe(true)
    expect(ut.isStrNotEmpty(`hello`)).toBe(true)
    expect(ut.isStrNotEmpty(``)).toBe(false)
    expect(ut.isStrNotEmpty(0)).toBe(false)
    expect(ut.isStrNotEmpty(-10)).toBe(false)
    expect(ut.isStrNotEmpty({a: 1})).toBe(false)
    expect(ut.isStrNotEmpty([2, 3])).toBe(false)
})

test('test capitalize method', () => {
    expect(ut.capitalize("1")).toBe("1")
    expect(ut.capitalize("hello world")).toBe("Hello World")
    expect(ut.capitalize(`hello`)).toBe(`Hello`)
    expect(ut.capitalize(``)).toBe(null)
    expect(ut.capitalize(0, "")).toBe("")
    expect(ut.capitalize(-10, false)).toBe(false)
})

test('test isKey method', () => {
    expect(ut.isKey("h1")).toBe(true)
    expect(ut.isKey("Hello_world")).toBe(true)
    expect(ut.isKey(`Hello_W0r_ld`)).toBe(true)
    expect(ut.isKey(`hello_world_a1`)).toBe(true)
    expect(ut.isKey(`_hello_world`)).toBe(false)
    expect(ut.isKey(`hello_world_`)).toBe(false)
    expect(ut.isKey(0)).toBe(false)
    expect(ut.isKey(-10)).toBe(false)
    expect(ut.isKey({a: 1})).toBe(false)
    expect(ut.isKey([2, 3])).toBe(false)
})

test('test isAttrKey method', () => {
    expect(ut.isAttrKey("h1")).toBe(true)
    expect(ut.isAttrKey("Hello-world")).toBe(true)
    expect(ut.isAttrKey(`Hello_World`)).toBe(true)
    expect(ut.isAttrKey(`hello_world_a1`)).toBe(true)
    expect(ut.isAttrKey(`_hello_world`)).toBe(false)
    expect(ut.isAttrKey(`hello_world_`)).toBe(false)
    expect(ut.isAttrKey(0)).toBe(false)
    expect(ut.isAttrKey(-10)).toBe(false)
    expect(ut.isAttrKey({a: 1})).toBe(false)
    expect(ut.isAttrKey([2, 3])).toBe(false)
})

test('test isValidRegex method', () => {
    expect(ut.isValidRegex(/[0-9]/)).toBe(true)
    expect(ut.isValidRegex('/[0-9]/')).toBe(true)
    expect(ut.isValidRegex('hello world')).toBe(true)
})

test('test isElement method', () => {
    expect(ut.isElement(document.createElement("div"))).toBe(true)
    expect(ut.isElement({})).toBe(false)
    expect(ut.isElement([2, 3])).toBe(false)
})