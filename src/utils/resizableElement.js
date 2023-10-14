/**
 * Resizable ResizeBar class
 * Used by ResizableHelper class
 */
import ResizableBase from "./resizableBase.js";
import {ut} from "./utils.js";

class ResizableElement extends ResizableBase{
    constructor(props){
        super()
        this.selector = null;
        this.setProps(props);
    }

    setSelector(value){
        this.selector = ResizableElement.setSelector(value);
    }

    getElement(){
        return document.querySelector(this.selector);
    }

    setProps(props){
        if(ut.isObject(props)){
            this.setSelector(props.selector);
        }
    }

    isReady(){
        return ut.isSelector(this.selector)
    }

    getWidth(){
        return this.getSelectorOffsetWith(this.selector);
    }

}

export default ResizableElement;