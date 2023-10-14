/**
 * Resizable SidePane class
 * Used by ResizableHelper class
 */
import ResizableElement from "./ResizableElement.js";
import {ut} from "./utils.js";

class SidePane extends ResizableElement{
    constructor(props){
        super(props);
        this.selector = null;
        this.width = null;
        this.minWidth = 300;
        this.setProps(props);
    }

    /**
     *
     * @param props
     */
    setProps(props){
        if(ut.isObject(props)){
            this.setSelector(props.selector)
            this.setMinWidth(props.minWidth);
        }
    }

    /**
     *
     * @return {boolean|*}
     */
    isReady(){
        return ut.isSelector(this.selector)
    }

    /**
     *
     * @param value
     */
    setMinWidth(value){
        this.minWidth = SidePane.setDimValue(value, 300);
    }

    /**
     *
     * @param width
     * @return {{visibility: string, width: string}|{visibility: string}|null}
     */
    static getPaneStyle(width){
        if(ut.isPositiveNumber(width)){
            return {
                width: `${width}%`,
                display: ''
            }
        }else if(ut.isNumber(width) && width === 0){
            return {
                display: 'hidden'
            }
        }else{
            return null;
        }

    }

    /**
     *
     * @param width
     * @return {*|boolean}
     */
    static isWidth(width){
        return SidePane.isDimValue(width);
    }

    /**
     *
     * @param width
     * @return {boolean}
     */
    setWidth(width){
        if(SidePane.isWidth(width)){
            this.width = width
            return true;
        }
        return false;
    }

    /**
     *
     * @return {{visibility: string, width: string}|{visibility: string}}
     */
    getStyle(){
        return SidePane.getPaneStyle(this.width);
    }

    /**
     *
     * @return {null}
     */
    resizePane(width){
        const element = this.getElement();
        if(ut.isPositiveNumber(width)){
            element.style.display = '';
            element.style.width = `${width}%`;
        }else{
            element.style.width = `${0}`;
            element.style.display = `none`;
        }
    }

    /**
     *
     */
    resetStyle(){
        const element = this.getElement()
        element.style.width = '';
        element.style.visibility = '';
        element.style.height = '';
        element.style.display = '';
    }
}

export default SidePane