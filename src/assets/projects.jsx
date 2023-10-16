import RandomQuoteMachineImg from '../img/RandomQuoteMachine.png'
import MarkdownPreviewerImg from '../img/MarkdownPreviewer.png'
import DrumMachineImg from '../img/DrumMachine.png'
import JsCalculatorImg from '../img/JavaSciptCalculator.png'
import InfoQuoteMachine from "../components/randQuotes/pageInfo/info.jsx";
import InfoMdPreviewer from "../components/mdPreviewer/pageInfo/info.jsx";
import InfoJsCalc from "../components/jsCalc/pageInfo/info.jsx";
import InfoDrumMachine from "../components/drmMachine/pageInfo/info.jsx";
import Info25_5Clock from "../components/25_5Clock/pageInfo/info.jsx";
/**
 *
 */
export const projects = [
    {
        name: 'Random Quote Machine',
        slug: 'random-quote-machine',
        showTitle: true,
        parent: 'front-end-projects',
        link: '/front-end-projects/random-quote-machine',
        img: RandomQuoteMachineImg,
        imgAlt: 'Random Quote Machine React App',
        description: '(React, Sass and Javascript)',
        info: <InfoQuoteMachine />
    },
    {
        name: 'MarkDown Previewer',
        slug: 'markdown-previewer',
        showTitle: false,
        parent: 'front-end-projects',
        link: '/front-end-projects/markdown-previewer',
        img: MarkdownPreviewerImg,
        imgAlt: 'MarkDown Previewer React App',
        description: '(React, Sass, Bootstrap and Javascript)',
        info: <InfoMdPreviewer />
    },
    {
        name: 'Drum Machine',
        slug: 'drum-machine',
        showTitle: true,
        parent: 'front-end-projects',
        link: '/front-end-projects/drum-machine',
        img: DrumMachineImg,
        imgAlt: 'Drum Machine React App',
        description: '(React, Sass, Bootstrap and Javascript)',
        info: <InfoDrumMachine />
    },
    {
        name: 'JavaScript Calculator',
        slug: 'js-calculator',
        showTitle: true,
        parent: 'front-end-projects',
        link: '/front-end-projects/js-calculator',
        img: JsCalculatorImg,
        imgAlt: 'JavaScript Calculator React App',
        description: '(React, Sass, Bootstrap and Javascript)',
        info: <InfoJsCalc />,
    },
    {
        name: '25+5 Clock',
        slug: '25-5-clock',
        showTitle: true,
        parent: 'front-end-projects',
        link: '/front-end-projects/25-5-clock',
        img: null,
        imgAlt: '25+5 Clock React App',
        description: '(React, Sass, Bootstrap and Javascript)',
        info: <Info25_5Clock />
    }
]