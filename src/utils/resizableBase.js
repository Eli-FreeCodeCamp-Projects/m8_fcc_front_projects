/**
 * ResizableBase class
 * Contain shared methods and constants for resizable classes.
 * Extended by SidePane, ResizeBar, PreviewerNav, PreviewerWindow, ResizableHelper
 */

import {ut} from './utils.js'

class ResizableBase{

    /**
     *
     * @param selector
     * @param defaultValue
     * @return {*|null}
     */
    static setSelector(selector, defaultValue= null){
        const def = (ut.isSelector(defaultValue)) ? defaultValue : null;
        return (ut.isSelector(selector)) ? selector : def;
    }

    /**
     *
     * @param value
     * @return {*|boolean}
     */
    static isDimValue(value){
        return ut.isNumber(value) && value >= 0;
    }

    /**
     *
     * @param value
     * @param defaultValue
     * @return {*|null}
     */
    static setDimValue(value, defaultValue= null){
        const def = (ResizableBase.isDimValue(defaultValue)) ? defaultValue : null;
        return (ResizableBase.isDimValue(value)) ? value : def;
    }

    getOffsetWith(element){
        return (ut.isElement(element)) ? element.offsetWidth : null;
    }

    /**
     *
     * @param selector
     * @return {number|null}
     */
    getSelectorOffsetWith(selector){
        const element = document.querySelector(selector);
        return this.getOffsetWith(element);
    }

    getOffsetLeft(element){
        return (ut.isElement(element)) ? element.offsetLeft : null;
    }

    /**
     *
     * @param selector
     * @return {number|null}
     */
    getSelectorOffsetLeft(selector){
        const element = document.querySelector(selector);
        return this.getOffsetLeft(element);
    }
}

export default ResizableBase