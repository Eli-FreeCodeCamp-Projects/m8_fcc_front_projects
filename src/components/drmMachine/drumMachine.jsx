import {PowerSelector} from "./powerSelector.jsx";
import {DisplayBoxWithContext} from "./displayBox.jsx";
import {VolumeSelector} from "./volumeSelector.jsx";
import {SoundBankSelector} from "./soundBankSelector.jsx";
import {DrumControls} from "./dmControls.jsx";
import {DrumPads} from "./dmPads.jsx";
import {Provider} from "react-redux";
import {Store} from "./store.js";

/**
 * DrumMachine Component
 * @return {JSX.Element}
 * @constructor
 */
export default function DrumMachine(){

    const controls = (
        <>
            <PowerSelector key="powerSelector" />
            <DisplayBoxWithContext key="displayBox" />
            <VolumeSelector key="volumeSelector" />
            <SoundBankSelector key="bankSelector" />
        </>
    )

    return(
        <Provider store={Store}>
            <section id="drum-container" className="container-fluid d-flex ">
                <div id="drum-machine" className="container-fluid">
                    <div className="row">
                        <div id="drum-header" className="col-md-12"><h1>M8 Drum Machine</h1></div>
                        <div id="drum-pads" className="col-md-6">
                            <DrumPads/>
                        </div>
                        <div id="drum-controls" className="col-md-6">
                            <DrumControls controls={controls} />

                        </div>
                    </div>
                </div>
            </section>
        </Provider>
    )
}