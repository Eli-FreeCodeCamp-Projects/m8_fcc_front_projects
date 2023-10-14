import { expect, test } from 'vitest'
import {CalcHelper as ch} from "../src/components/jsCalc/assets/calcHelper.js";

test('test isOperatorChar method', () => {
    expect(ch.isOperatorChar('-')).toBe(true)
    expect(ch.isOperatorChar('x')).toBe(true)
    expect(ch.isOperatorChar('/')).toBe(true)
    expect(ch.isOperatorChar('+')).toBe(true)
    expect(ch.isOperatorChar('=')).toBe(true)
    expect(ch.isOperatorChar('')).toBe(false)
    expect(ch.isOperatorChar('0')).toBe(false)
})

test('test isValidOperatorCombination method', () => {
    expect(ch.isValidOperatorCombination('-', '-')).toBe(true)
    expect(ch.isValidOperatorCombination('x', '-')).toBe(true)
    expect(ch.isValidOperatorCombination('/', '-')).toBe(true)
    expect(ch.isValidOperatorCombination('+', '-')).toBe(false)
    expect(ch.isValidOperatorCombination('=', '-')).toBe(false)
    expect(ch.isValidOperatorCombination('-', '+')).toBe(false)
    expect(ch.isValidOperatorCombination('-', '/')).toBe(false)
    expect(ch.isValidOperatorCombination('-', 'x')).toBe(false)
    expect(ch.isValidOperatorCombination('-', '=')).toBe(false)
    expect(ch.isValidOperatorCombination('x', '+')).toBe(false)
})

test('test isNumberChar method', () => {
    expect(ch.isNumberChar('0')).toBe(true)
    expect(ch.isNumberChar('1')).toBe(true)
    expect(ch.isNumberChar('9')).toBe(true)
    expect(ch.isNumberChar('.')).toBe(true)
    expect(ch.isNumberChar('x')).toBe(false)
})

test('test isValidStartChar method', () => {
    expect(ch.isValidStartChar('1')).toBe(true)
    expect(ch.isValidStartChar('9')).toBe(true)
    expect(ch.isValidStartChar('.')).toBe(true)
    expect(ch.isValidStartChar('x')).toBe(false)
    expect(ch.isValidStartChar('0')).toBe(false)
})

test('test isEqualChar method', () => {
    expect(ch.isEqualChar('=')).toBe(true)
    expect(ch.isEqualChar('9')).toBe(false)
    expect(ch.isEqualChar('.')).toBe(false)
    expect(ch.isEqualChar('x')).toBe(false)
    expect(ch.isEqualChar('0')).toBe(false)
})

test('test isValidCalc method', () => {
    expect(ch.isValidCalc('-9+2')).toBe(true)
    expect(ch.isValidCalc('9+2')).toBe(true)
    expect(ch.isValidCalc('9x2')).toBe(true)
    expect(ch.isValidCalc('9x-2')).toBe(true)
    expect(ch.isValidCalc('9/-2')).toBe(true)
    expect(ch.isValidCalc('9-2')).toBe(true)
})

test('test hasDecimalOnNumber method', () => {
    expect(ch.hasDecimalOnLastNumber('-9+2.')).toBe(true)
    expect(ch.hasDecimalOnLastNumber('9+2.25')).toBe(true)
    expect(ch.hasDecimalOnLastNumber('9x')).toBe(false)
    expect(ch.hasDecimalOnLastNumber('9x-2')).toBe(false)
    expect(ch.hasDecimalOnLastNumber('9/-2')).toBe(false)
    expect(ch.hasDecimalOnLastNumber('9-2')).toBe(false)
})

test('test setNewOutput method', () => {
    expect(ch.setNewOutput('-9+2', '+')).toBe('-9+2+')
    expect(ch.setNewOutput('0', '0')).toBe('0')
    expect(ch.setNewOutput('0', '1')).toBe('1')
    expect(ch.setNewOutput('-', '1')).toBe('-1')
    expect(ch.setNewOutput('0', 'x')).toBe('0x')
    expect(ch.setNewOutput('0', '.')).toBe('0.')
    expect(ch.setNewOutput('0.', '.')).toBe('0.')
    expect(ch.setNewOutput('5x-', '+')).toBe('5+')
})

test('test getMatchedValues method', () => {
    expect(ch.getMatchedValues(
        /^(?<operator>[/x+-])(-?[0-9]+(?:\.?[0-9]+)?)/,
        '-3',
        2)).toStrictEqual({
        text: '',
        parsed: ['-', '3']
    })

    expect(ch.getMatchedValues(
        /^(?<number>-?[0-9]+(?:\.?[0-9]+)?)(?<operator>[/x+-])(-?[0-9]+(?:\.?[0-9]+)?)/,
        '2-3x-9',
        3)).toStrictEqual({
        text: 'x-9',
        parsed: ['2', '-', '3']
    })
    //-> bad group number
    expect(ch.getMatchedValues(
        /^(?<operator>[/x+-])(-?[0-9]+(?:\.?[0-9]+)?)/,
        '-3',
        1)).toBe(null)
});

test('test parseCalc method', () => {
    expect(ch.parseCalc('-9+2')).toStrictEqual(['-9', '+', '2'])
    expect(ch.parseCalc('9+2')).toStrictEqual(['9', '+', '2'])
    expect(ch.parseCalc('9x-2')).toStrictEqual(['9', 'x', '-2'])
    expect(ch.parseCalc('-9x-2')).toStrictEqual(['-9', 'x', '-2'])
    expect(ch.parseCalc('-9/-2-2')).toStrictEqual(['-9', '/', '-2', '-', '2'])
});

test('test getCalcResult method', () => {
    expect(ch.getCalcResult(9, '+', 1)).toBe(10)
    expect(ch.getCalcResult(-9, '+', 1)).toBe(-8)
    expect(ch.getCalcResult(9.5, '+', 0.5)).toBe(10)
    expect(ch.getCalcResult(2, 'x', 5)).toBe(10)
    expect(ch.getCalcResult(10, '/', 2)).toBe(5)
    expect(ch.getCalcResult(10, '-', 2)).toBe(8)
})

test('test parseNumbersFromArray method', () => {
    expect(ch.parseNumbersFromArray(['9', '+', '2'])).toStrictEqual([9, '+', 2])
    expect(ch.parseNumbersFromArray(['9.2', '+', '2'])).toStrictEqual([9.2, '+', 2])
    expect(ch.parseNumbersFromArray(['9', 'x', '2'])).toStrictEqual([9, 'x', 2])
    expect(ch.parseNumbersFromArray(['9', '/', '2'])).toStrictEqual([9, '/', 2])
    expect(ch.parseNumbersFromArray(['-9', '/', '-2'])).toStrictEqual([-9, '/', -2])
});

test('test calcFirstResult method', () => {
    expect(ch.calcFirstResult([9, '+', 2])).toStrictEqual([11])
    expect(ch.calcFirstResult([9.2, '+', 2])).toStrictEqual([11.2])
    expect(ch.calcFirstResult([9, 'x', 2])).toStrictEqual([18])
    expect(ch.calcFirstResult([10, '/', 2])).toStrictEqual([5])
    expect(ch.calcFirstResult([-5, 'x', -2])).toStrictEqual([10])
    expect(ch.calcFirstResult([-5, 'x', -2, '+', 5])).toStrictEqual([10, '+', 5])
});

test('test getResult method', () => {
    expect(ch.getResult('-9+2')).toStrictEqual("-7")
    expect(ch.getResult('9+2')).toStrictEqual("11")
    expect(ch.getResult('9x-2')).toStrictEqual("-18")
    expect(ch.getResult('-9x-2')).toStrictEqual("18")
    expect(ch.getResult('-8+2/-2-2')).toStrictEqual("1")
});