import {ut} from "../../../utils/utils.js";
export const TypePads = Object.freeze({
    NUMBER:   Symbol("number"),
    OPERATOR:  Symbol("operator"),
    GROUP:  Symbol("group"),
    FUNCTION:  Symbol("function")
});

export const basePads = [
    {
        containerClass: "js-calc-row",
        pads:[
            {idPad: "del", iconClass: "fas fa-backspace", dataCalc: "Del", keyPress: "Backspace", calcClass: 'btn-secondary'},
            {idPad: "clear", text: "Ac", dataCalc: "Ac", keyPress: "Escape", calcClass: 'btn-danger'},
            //{idPad: "open-group", text: "(", dataCalc: "(", keyPress: "(", calcClass: 'btn-secondary'},
            //{idPad: "close-group", text: ")", dataCalc: ")", keyPress: ")", calcClass: 'btn-secondary'}
        ]
    },
    {
        containerClass: "js-calc-row",
        pads:[
            {idPad: "seven", text: "7", dataCalc: "7", keyPress: "7", calcClass: 'btn-secondary btn-number'},
            {idPad: "eight", text: "8", dataCalc: "8", keyPress: "8", calcClass: 'btn-secondary btn-number'},
            {idPad: "nine", text: "9", dataCalc: "9", keyPress: "9", calcClass: 'btn-secondary btn-number'},
            {idPad: "divide", text: "/", dataCalc: "/", keyPress: "/", calcClass: 'btn-secondary'},
            {idPad: "multiply", text: "x", dataCalc: "x", keyPress: "*", calcClass: 'btn-secondary'}
        ]
    },
    {
        containerClass: "js-calc-row",
        pads:[
            {idPad: "four", text: "4", dataCalc: "4", keyPress: "4", calcClass: 'btn-secondary btn-number'},
            {idPad: "five", text: "5", dataCalc: "5", keyPress: "5", calcClass: 'btn-secondary btn-number'},
            {idPad: "six", text: "6", dataCalc: "6", keyPress: "6", calcClass: 'btn-secondary btn-number'},
            {idPad: "subtract", text: "-", dataCalc: "-", keyPress: "-", calcClass: 'btn-secondary'},
            {idPad: "add", text: "+", dataCalc: "+", keyPress: "+", calcClass: 'btn-secondary'}
        ]
    },
    {
        containerClass: "js-calc-row",
        pads:[
            {idPad: "one", text: "1", dataCalc: "1", keyPress: "1", calcClass: 'btn-secondary btn-number'},
            {idPad: "two", text: "2", dataCalc: "2", keyPress: "2", calcClass: 'btn-secondary btn-number'},
            {idPad: "three", text: "3", dataCalc: "3", keyPress: "3", calcClass: 'btn-secondary btn-number'},
            {idPad: "equals", text: "=", dataCalc: "=", keyPress: "Enter", calcClass: 'btn-secondary'},
        ]
    },
    {
        containerClass: "js-calc-row",
        pads:[
            {idPad: "zero", text: "0", dataCalc: "0", keyPress: "0", calcClass: 'btn-secondary btn-number'},
            {idPad: "decimal", text: ".", dataCalc: ".", keyPress: ".", calcClass: 'btn-secondary btn-number'},
        ]
    }
]

export const keyPressPads = basePads.reduce((res, obj) => {
    const keys = obj.pads.reduce((resPad, objPad) => {
        if(ut.isStrNotEmpty(objPad.keyPress)){
            resPad.push({
                idPad: objPad.idPad,
                keyPress: objPad.keyPress,
                dataCalc: objPad.dataCalc,
            })
        }
        return resPad;
    }, [])
    res = res.concat(keys)
    return res;
}, [])