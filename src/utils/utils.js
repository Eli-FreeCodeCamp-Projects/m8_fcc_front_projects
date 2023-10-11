/**
 * Helper Utilities
 * @type {{isObject: (function(*): *), isNumber: (function(*): *), isPositiveNumber: (function(*): *), isArray: (function(*): arg is any[]), isStr: (function(*): *)}}
 */
export const ut = {
    toFixedFloat: (fNum, fix = 2, defaultValue = null) => {
        return (ut.isNumber(fNum) && ut.isNumber(fix)) ? parseFloat(fNum.toFixed(fix)) : defaultValue;
    },
    isObject: (value) => {
        return typeof value === 'object' && !Array.isArray(value) && value !== null
    },
    isArray: (value) => {
        return Array.isArray(value)
    },
    isNumber: (value) => {
        return !isNaN(value) && value != null
    },
    isPositiveNumber: (value) => {
        return ut.isNumber(value) && value > 0
    },
    isStr: (value) => {
        return (typeof value === 'string' || value instanceof String)
    },
    isStrNotEmpty: (value) => {
        return (ut.isStr(value) && value !== '')
    },
    /*
    * Test if value is valid key.
    *
    */
    isKey: (value) => {
        return ut.isStr(value) && /(?=\w{1,30}$)^([a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*)$/.test(value)
    },

    /*
    * Test if value is valid attribute key.
    *
    */
    isAttrKey: (value) => {
        return ut.isStr(value) && /(?=[a-zA-Z0-9\-_]{1,80}$)^([a-zA-Z0-9]+(?:[_-][a-zA-Z0-9]+)*)$/.test(value)
    },
    queryCheck: (s) => {
        return document.createDocumentFragment().querySelector(s)
    },
    isSelector: (selector) => {
        try {
            ut.isStr(selector) && ut.queryCheck(selector)
        } catch {
            return false
        }
        return true;
    },
    isElement: (element) => {
        return element instanceof Element || element instanceof Document;
    }
}