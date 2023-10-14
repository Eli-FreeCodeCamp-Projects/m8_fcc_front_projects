/**
 * Resizable PreviewerNav class
 * Used by ResizableHelper class
 */
import ResizableBase from "./resizableBase.js";
import {ut} from "./utils.js";
import {Display} from "./resizableEnums.js";

class PreviewerNav extends ResizableBase{

    constructor(props){
        super();
        this.btLeft = null;
        this.btCombo = null;
        this.btRight = null;
        this.status = Display.COMBO_PANE

        this.setProps(props);
    }

    setBtLeft(value){
        this.btLeft = PreviewerNav.setSelector(value);
    }

    setBtCombo(value){
        this.btCombo = PreviewerNav.setSelector(value);
    }

    setBtRight(value){
        this.btRight = PreviewerNav.setSelector(value);
    }

    isNavStatus(value){
        return value === Display.LEFT_PANE || Display.COMBO_PANE  || Display.RIGHT_PANE
    }

    setNavStatus(value){
        this.status = (this.isNavStatus(value)) ? value : this.COMBO_PANE;
    }

    setProps(props){
        if(ut.isObject(props)){
            this.setBtLeft(props.btLeft);
            this.setBtCombo(props.btCombo);
            this.setBtRight(props.btRight);
            this.setNavStatus(props.status);
        }
    }

    initFromStatus(){
        switch (this.status){
            case Display.LEFT_PANE:
                this.setBtLeftActive();
                break;
            case Display.COMBO_PANE:
                this.setBtComboActive();
                break;
            case Display.RIGHT_PANE:
                this.setBtRightActive();
                break;
        }
    }

    isReady(){
        return ut.isSelector(this.btLeft)
            && ut.isSelector(this.btCombo)
            && ut.isSelector(this.btRight)
            && this.isNavStatus(this.status)
    }

    resetNavActive(){
        document.querySelector(this.btLeft).classList.remove('active');
        document.querySelector(this.btCombo).classList.remove('active');
        document.querySelector(this.btRight).classList.remove('active');
    }

    isBtLeftActive(){
        return document.querySelector(this.btLeft).classList.contains('active');
    }

    setBtLeftActive(){
        if(!this.isBtLeftActive()) {
            this.resetNavActive();
            this.status = Display.LEFT_PANE;
            document.querySelector(this.btLeft).classList.add('active');
        }
    }

    isBtComboActive(){
        return document.querySelector(this.btCombo).classList.contains('active');
    }

    setBtComboActive(){
        if(!this.isBtComboActive()) {
            this.resetNavActive();
            this.status = Display.COMBO_PANE;
            document.querySelector(this.btCombo).classList.add('active');
        }
    }

    isBtRightActive(){
        return document.querySelector(this.btRight).classList.contains('active');
    }

    setBtRightActive(){
        if(!this.isBtRightActive()){
            this.resetNavActive();
            this.status = Display.RIGHT_PANE;
            document.querySelector(this.btRight).classList.add('active');
        }

    }
}

export default PreviewerNav;