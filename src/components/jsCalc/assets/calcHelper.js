import {ut} from "../../../utils/utils.js";
/**
 *
 */
export const CalcFunc = Object.freeze({
    ADD:   Symbol("add"),
    SUBTRACT:  Symbol("subtract"),
    DIVIDE:  Symbol("divide"),
    MULTIPLY:  Symbol("multiply"),
    DECIMAL:  Symbol("decimal")
});

export class CalcHelper{
    static FUNC_KEYS = '/x\\-+='
    static OPERATION_KEYS = '/x\\-+'
    /**
     * Test if char is valid operator
     * @param val {string} The char to test
     * @return {boolean} Return true if char is a valid operator or false elsewhere
     */
    static isOperatorChar(val){
        return ut.isStr(val) && new RegExp(`[${CalcHelper.FUNC_KEYS}]`).test(val)
    }

    /**
     * Test if the combination of two operators is valid.
     * Valid operators are : '/-' 'x-' '--'
     * @param op1 {string} The first operator
     * @param op2 {string} The second operator
     * @return {boolean} True if the two operators can be combined
     */
    static isValidOperatorCombination(op1, op2){
        const combined = op1 + op2
        return ut.isStr(combined) && /(:?[/x-]-)/.test(combined)
    }

    /**
     * Test if char value is valid number char
     * Valid chars are : [0-9.]
     * @param val {string} The char to test
     * @return {boolean} Return true if the char value is valid number char
     */
    static isNumberChar(val){
        return ut.isStr(val) && /[0-9.]/.test(val)
    }

    /**
     * Test if is valid start char from formula
     * Start char can be : [1-9.-]
     * @param val {string} The character to test
     * @return {boolean} Return true if the char value is valid start char
     */
    static isValidStartChar(val){
        return ut.isStr(val) && /[1-9.-]/.test(val)
    }

    /**
     * Test if char is equal character '='.
     * @param val {string} The character to test
     * @return {boolean} Return true if the char value is equal to '='
     */
    static isEqualChar(val){
        return ut.isStr(val) && val === '='
    }

    /**
     * Test if valid string formula.
     * @param formula {string} The formula to test
     * @return {boolean} Return true if the formula is valid
     */
    static isValidCalc(formula){
        return ut.isStr(formula) && /^(-?[0-9]+(:?[.][0-9]+)?[/x+-]-?[0-9]+(:?[.][0-9]+)?)+$/.test(formula)
    }

    static hasDecimalOnLastNumber(output){
        return /[0-9]+\.(?:[0-9]+)?$/.test(output)
    }

    /**
     * Set the new output display value from new key
     * @param output {string} The actual output string on the display
     * @param keyAdd {string} The new character to add
     * @return {string|*}
     */
    static setNewOutput(output, keyAdd){
        let resOutput = (output === '0') ? '0' : output;
        if(ut.isStrNotEmpty(resOutput)){
            const chars = [...resOutput]
            const nbChars = chars.length;
            const last = chars[nbChars-1];
            const isOperatorKey = CalcHelper.isOperatorChar(keyAdd)
            const isNotValidOperatorCombination = isOperatorKey
                && CalcHelper.isOperatorChar(last)
                && !CalcHelper.isValidOperatorCombination(last, keyAdd)
            if(isNotValidOperatorCombination){
                if(nbChars-2 > 0 && CalcHelper.isOperatorChar(chars[nbChars-2])){
                    chars.pop()
                }
                chars.pop()
                chars.push(keyAdd)
                resOutput = chars.join('')
            }else if(isOperatorKey){
                chars.push(keyAdd)
                resOutput = chars.join('')
            }else if(keyAdd === '0' && output === '0'){
                resOutput = '0'
            }else if(keyAdd === '.' && CalcHelper.hasDecimalOnLastNumber(output)){
                resOutput = chars.join('')
            }else if(keyAdd === '.' && output === '0'){
                resOutput = '0.'
            }
            else if(CalcHelper.isNumberChar(keyAdd)){
                if(output === '0'){
                    chars.pop()
                }
                chars.push(keyAdd)
                resOutput = chars.join('')
            }
        }else if(CalcHelper.isValidStartChar(keyAdd)){
            resOutput = keyAdd
        }else{
            resOutput = '0'
        }

        return resOutput
    }

    /**
     * Apply match regex to text.
     * The Extract regex groups result.
     * Then remove matched result from text.
     * @param regex {RegExp} the regex to apply on text
     * @param text {string} The string to match the regex
     * @param nbGroups {number} The number of capture groups in regex + 1
     * @return {{parsed: [{string}], text: {string}}|null} Return an object with the rest of string and an array with matched groups
     */
    static getMatchedValues(regex, text, nbGroups){
        if(ut.isStrNotEmpty(text) && ut.isValidRegex(regex)){
            const tmp = text.match(regex)
            if(ut.isArray(tmp) && tmp.length - 1 === nbGroups){
                const res = tmp.filter((val, i) => {
                    if(i > 0){
                        return val
                    }
                })
                text = text.substring(tmp[0].length, text.length);
                return {
                    text: text,
                    parsed: res
                }
            }
        }
        return null
    }

    /**
     * Parse Output value from string to Array of string
     *
     * @param output {string} The output value to parse
     * @return {[{string}]|null} Return Array of string or null if malformed output
     */
    static parseCalc(output){
        let res = [],
            tmp,
            text = output,
            i = 0;
        const MAX_LOOP = 100
        const startReg = /^(?<number>-?[0-9]+(?:\.?[0-9]+)?)(?<operator>[/x+-])(-?[0-9]+(?:\.?[0-9]+)?)/
        const regex = /^(?<operator>[/x+-])(-?[0-9]+(?:\.?[0-9]+)?)/
        tmp = CalcHelper.getMatchedValues(startReg, text, 3)
        if(ut.isObject(tmp)){
            res = tmp.parsed
            text = tmp.text;
        }
        while(text.length > 0 && i < MAX_LOOP){
            tmp = CalcHelper.getMatchedValues(regex, text, 2)
            if(ut.isObject(tmp)){
                res = res.concat(tmp.parsed)
                text = tmp.text;
            }else{
                text = ''
                res = null
                break
            }
            i++;
        }
        return res
    }

    /**
     * Get the result of operation
     * @param num1 {number} The first number
     * @param operator {string} the operator
     * @param num2 {number} The second number
     * @return {number|null} Return the result of operation or null if bad operator
     */
    static getCalcResult(num1, operator, num2){
        switch(operator){
            case '+':
                return num1 + num2
            case '-':
                return num1 - num2
            case 'x':
                return num1 * num2
            case '/':
                return num1 / num2
            default:
                return null;
        }
    }

    /**
     * Parse all numbers from array of strings
     * @param array {[{string}]}
     * @return {[{string}|{number}]} Return an array with all numbers parsed
     */
    static parseNumbersFromArray(array){
        return array.map((val, i)=>{
            if(i % 2 === 0){
                if(val.includes('.')){
                    return parseFloat(val)
                }else{
                    return parseInt(val)
                }
            }else{
                return val
            }
        })
    }

    /**
     * Get result of first operation from array of global parsed operations
     * and replace 3 first items by the result of operation.
     * @param array {[{string}|{number}]} The array with global parsed operations
     * @return {*[]}
     */
    static calcFirstResult(array){
        let result = [...array]
        const firstRes = CalcHelper.getCalcResult(array[0], array[1], array[2])
        result = result.splice(2)
        result[0] = firstRes
        return result
    }

    /**
     * Get result of output operations
     * @param output array {[{string}]}
     * @return {string|string|null}
     */
    static getResult(output){
        const parsed = CalcHelper.parseCalc(output)
        if(ut.isArray(parsed)){
            let resParsed = CalcHelper.parseNumbersFromArray(parsed)
            while(resParsed.length > 1){
                if(resParsed.length >= 3){
                    resParsed = CalcHelper.calcFirstResult(resParsed)
                }else{
                    resParsed = []
                    break
                }

            }
            const nbRes = resParsed.length
            resParsed = (nbRes === 1) ? ''+resParsed[0] : '0'
            return resParsed;
        }
        return null
    }
}