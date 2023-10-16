import Heater1 from '../assets/sounds/bank1/Heater-1.mp3'
import Heater2 from '../assets/sounds/bank1/Heater-2.mp3'
import Heater3 from '../assets/sounds/bank1/Heater-3.mp3'
import Heater4 from '../assets/sounds/bank1/Heater-4_1.mp3'
import Clap from '../assets/sounds/bank1/Heater-6.mp3'
import OpenHH from '../assets/sounds/bank1/Dsc_Oh.mp3'
import KickNHat from '../assets/sounds/bank1/Kick_n_Hat.mp3'
import Kick from '../assets/sounds/bank1/RP4_KICK_1.mp3'
import ClosedHH from '../assets/sounds/bank1/Cev_H2.mp3'

export const banksData = [
    {
        name: "bank1",
        display: "Heater kit",
        drum_pads : [
            {id:"Heater-1", shortcut: "Q", key_code: 0, display:"Heater 1", sound: Heater1},
            {id:"Heater-2", shortcut: "W", key_code: 0, display:"Heater 2", sound: Heater2},
            {id:"Heater-3", shortcut: "E", key_code: 0, display:"Heater 3", sound: Heater3},
            {id:"Heater-4", shortcut: "A", key_code: 0, display:"Heater 4", sound: Heater4},
            {id:"Clap", shortcut: "S", key_code: 0, display:"Clap", sound: Clap},
            {id:"Open-HH", shortcut: "D", key_code: 0, display:"Open HH", sound: OpenHH},
            {id:"Kick-n-Hat", shortcut: "Z", key_code: 0, display:"Kick n'Hat", sound: KickNHat},
            {id:"Kick", shortcut: "X", key_code: 0, display:"Kick", sound: Kick},
            {id:"Closed-HH", shortcut: "C", key_code: 0, display:"Closed HH", sound: ClosedHH}
        ]
    },
    {
        name: "bank2",
        display: "Smooth Piano Kit",
        drum_pads : [
            {id:"Chord_1", shortcut: "Q", key_code: 0, display:"Chord 1", sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},
            {id:"Chord_2", shortcut: "W", key_code: 0, display:"Chord 2", sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},
            {id:"Chord-3", shortcut: "E", key_code: 0, display:"Chord 3", sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},
            {id:"Shaker", shortcut: "A", key_code: 0, display:"Shaker", sound: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},
            {id:"Open-HH", shortcut: "S", key_code: 0, display:"Open HH", sound: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},
            {id:"Closed-HH", shortcut: "D", key_code: 0, display:"Closed HH", sound: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},
            {id:"Punchy-Kick", shortcut: "Z", key_code: 0, display:"Punchy Kick", sound: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},
            {id:"Side-Stick", shortcut: "X", key_code: 0, display:"Side Kick", sound: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},
            {id:"Snare", shortcut: "C", key_code: 0, display:"Snake", sound: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}
        ]
    }
]