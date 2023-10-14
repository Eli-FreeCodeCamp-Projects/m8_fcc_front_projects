import {DataStorage} from './dataStorage.js'
import {ut} from './utils.js'
import ResizableBase from "./resizableBase.js";
import ResizableWindow from "./resizableWindow.js";
import SidePane from "./resizableSidePane.js";
import ResizableElement from "./ResizableElement.js";
import PreviewerNav from "./resizableNav.js";
import {Unit, Display} from "./resizableEnums.js";

/**
 *
 */
export class ResizableHelper extends ResizableBase{
    storageKey = null;
    window = null;
    nav = null;
    leftPane = null;
    rightPane = null;
    resizeBar = null;
    constructor(props){
        super()
        this.setProps(props);
        this.getDataFromStorage();
    }

    /**
     * Set window class props
     * Define a min width for resize limit.
     * @param props {{minWidth: Number}} The min with of window to limit resize.
     */
    setWindow(props){
        this.window = new ResizableWindow(props);
    }

    /**
     * Set Nav bar class props
     * Define the nav buttons selectors.
     * @param props {{btLeft: string, btCombo: string, btRight: string }} The css selector of nav buttons .
     */
    setNav(props){
        this.nav = new PreviewerNav(props);
    }

    /**
     *
     * @param props
     */
    setLeftPane(props){
        this.leftPane = new SidePane(props);
    }

    /**
     *
     * @param props
     */
    setRightPane(props){
        this.rightPane = new SidePane(props);
    }

    /**
     *
     * @param props
     */
    setResizeBar(props){
        this.resizeBar = new ResizableElement(props);
    }

    /**
     *
     * @param props
     */
    setProps(props){
        if(ut.isObject(props)){
            this.setWindow(props.window);
            this.setNav(props.nav);
            this.setLeftPane(props.leftPane);
            this.setRightPane(props.rightPane);
            this.setResizeBar(props.resizeBar);
        }
    }

    /**
     * Test if all properties are ready.
     * @return {boolean} Return true if all components are ready or false elsewhere.
     */
    isReady(){
        return this.window.isReady()
            && this.nav.isReady()
            && this.leftPane.isReady()
            && this.rightPane.isReady()
            && this.resizeBar.isReady()
    }

    /**
     *
     */
    getDataFromStorage(){
        const storageData = DataStorage.getStoreData(this.storageKey);
        if(ut.isObject(storageData)){
            this.setPanesSize(storageData);
            this.nav.setNavStatus(storageData.nav)
        }
    }

    setDataToStorage(){
        return DataStorage.setStoreData(
            this.storageKey,
            this.getDataState()
        );
    }

    getDataState(){
        return {
            left_w: this.leftPane.width,
            right_w: this.rightPane.width,
            nav: this.nav.status,
        }
    }

    getPanesSize(){
        return {
            left_w: this.leftPane.width,
            right_w: this.rightPane.width
        }
    }

    getPixToPercentSize(size){
        const {left_w, right_w} = size;
        return {
            left_w: this.window.getPixToPercent(left_w),
            right_w: this.window.getPixToPercent(right_w)
        }
    }

    getPercentSizes(size, unit){
        if(unit === Unit.PIXEL){
            return this.getPixToPercentSize(size);
        }
        return size;
    }

    setPanesSize(size, unit= Unit.PERCENT){
        const {left_w, right_w} = this.getPercentSizes(size, unit);
        this.leftPane.setWidth(left_w);
        this.rightPane.setWidth(right_w);
    }

    resizePanes(size, unit=Unit.PERCENT){
        const {left_w, right_w} = this.getPercentSizes(size, unit);
        this.leftPane.resizePane(left_w);
        this.rightPane.resizePane(right_w);
    }

    setAndResizePanes(size, unit=Unit.PERCENT){
        this.setPanesSize(size, unit)
        this.resizePanes(size, unit)
    }

    resetWindowsSizes(){
        this.leftPane.resetStyle();
        this.rightPane.resetStyle();
    }

    handleResizeWindow(){
        const mouseX = this.window.mouseLeft,
            left_pane = this.leftPane.getElement(),
            left_x = this.getOffsetLeft(left_pane),
            bar_w = this.resizeBar.getWidth(),
            window_w = this.window.getWidth(),
            is_min_left = (mouseX >= this.leftPane.minWidth),
            is_min_right = (mouseX <= window_w - this.rightPane.minWidth);

        if(is_min_left && is_min_right ){

            // Get width of left and right panes in pixel
            const left_px = (mouseX - left_x),
                right_px = window_w - left_px - bar_w;
            this.setAndResizePanes({
                left_w: left_px,
                right_w:  right_px
            }, Unit.PIXEL);
        }
    }

    isOnResize(){
        return this.window.resizeStarted;
    }

    startResize(){
        this.window.resizeStarted = true;
    }

    endResize(){
        this.window.resizeStarted = false;
        this.nav.setBtComboActive();
        this.setDataToStorage();
    }
    setMouseLeft(mouseLeft){
        this.window.setMouseLeft(mouseLeft);
    }

    getLeftPaneStyle(){
        return this.leftPane.getStyle();
    }

    getRightPaneStyle(){
        return this.rightPane.getStyle();
    }

    expandLeftPane(){
        this.nav.setBtLeftActive();
        this.resetWindowsSizes();
        if(this.window.isWide){
            this.resizePanes({
                left_w: 100,
                right_w:  0
            });
        }else{
            const left_pane = this.leftPane.getElement(),
                right_pane = this.rightPane.getElement();

            left_pane.style.height = "100vh";
            right_pane.style.display = 'none';
        }
        this.setDataToStorage();
    }

    expandRightPane(){
        this.nav.setBtRightActive();
        this.resetWindowsSizes();
        if(this.window.isWide){
            this.resizePanes({
                left_w: 0,
                right_w:  100
            });
        }else{
            const left_pane = this.leftPane.getElement(),
                right_pane = this.rightPane.getElement();
            right_pane.style.height = "100vh";
            left_pane.style.display = 'none';
        }
        this.setDataToStorage();
    }

    hasComboDataView(){
        return ut.isPositiveNumber(this.leftPane.width)
            && ut.isPositiveNumber(this.rightPane.width)
    }

    loadComboView(){
        this.getDataFromStorage();
        if(this.window.isWide){
            this.nav.setBtComboActive();
            this.resetWindowsSizes();
            if(this.hasComboDataView()){
                this.resizePanes(this.getPanesSize());

            }else{
                this.setAndResizePanes({
                    left_w: 50,
                    right_w:  50
                });
            }

        }else{
            switch(this.nav.status){
                case Display.RIGHT_PANE:
                    this.expandRightPane();
                    break;
                default:
                    this.expandLeftPane();
                    break;
            }
        }
    }

    loadView(){
        switch(this.nav.status){
            case Display.LEFT_PANE:
                this.expandLeftPane();
                break;
            case Display.RIGHT_PANE:
                this.expandRightPane();
                break;
            case Display.COMBO_PANE:
                this.loadComboView();
                break;
            default:
                if(this.window.isWide){
                    this.loadComboView();
                }else{
                    this.expandLeftPane();
                }
                break;
        }
    }

    resizeView(){
        const back = this.window.isWide
        if(this.window.setTypeWindow() !== back){
            this.loadView();
        }
    }

    ExpandWindow(element){
        if(ut.isElement(element)){
            const controls = element.getAttribute('aria-controls');
            switch(controls){
                case 'm8_left_body':
                    this.expandLeftPane();
                    break;
                case 'm8_right_body':
                    this.expandRightPane();
                    break;
                default:
                    break;
            }

        }
    }

}



