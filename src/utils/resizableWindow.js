/**
 * Resizable window class
 * Used by ResizableHelper class
 */
import {ut} from './utils.js'
import ResizableElement from "./ResizableElement.js";

class ResizableWindow extends ResizableElement{
    constructor(props){
        super(props);
        this.selector = null
        this.minWidth = null;
        this.isWide = true;
        this.resizeStarted = false;
        this.mouseLeft = 0
        this.width = 0
        this.setProps(props);
    }

    setProps(props){
        if(ut.isObject(props)){
            this.setMinWidth(props.minWidth);
            this.setSelector(props.selector)
        }
    }

    getPixToPercent(paneWidth){
        const containerWidth = this.getWidth();
        if(ut.isPositiveNumber(containerWidth)){
            return ut.toFixedFloat(paneWidth * 100 / containerWidth);
        }
        return null;
    }

    setMinWidth(value){
        this.minWidth = ResizableWindow.setDimValue(value);
    }

    isReady(){
        return ResizableWindow.isDimValue(this.minWidth)
            && ut.isSelector(this.selector)
    }

    isWideWindow(screenWidth){
        return (
            ut.isPositiveNumber(screenWidth)
            && screenWidth >= this.minWidth
        )
    }

    setTypeWindow(){
        this.isWide = this.isWideWindow(window.innerWidth)
        return this.isWide;
    }

    setMouseLeft(mouseLeft){
        this.mouseLeft = (ut.isPositiveNumber(mouseLeft) ? mouseLeft : null);
    }
}

export default ResizableWindow