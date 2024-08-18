var $gXNCa$reactjsxruntime = require("react/jsx-runtime");
var $gXNCa$react = require("react");
var $gXNCa$styledcomponents = require("styled-components");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "TextCrawl", () => $c326a28814121823$export$97685c2900b1d23a);
// import { createRoot } from "react-dom/client";
// import { App } from "./App";



const $ad02508aff8c5e68$export$2ebb7273d28c0c31 = (0, ($parcel$interopDefault($gXNCa$styledcomponents))).div`
  display: flex;
  flex-direction: column;
`;
const $ad02508aff8c5e68$export$e9661cbce5581fba = (0, ($parcel$interopDefault($gXNCa$styledcomponents))).div`
  font-family: ${({ fontFamily: fontFamily })=>fontFamily || "sans-serif"};
  width: 60vw;
  color: ${({ textColor: textColor })=>textColor || "white"};
  font-size: 15px;
  background: ${({ bgColor: bgColor })=>bgColor || "black"};
  border-radius: 0;
  padding: 10px;
`;
const $ad02508aff8c5e68$export$2ea9fd34accb674d = (0, ($parcel$interopDefault($gXNCa$styledcomponents))).div`
  font-family: ${({ fontFamily: fontFamily })=>fontFamily || "sans-serif"};
  position: relative;
  background-color: ${({ bgColor: bgColor })=>bgColor || "black"};
  font-size: 25px;
  padding: 20px;
  border-radius: 0;
  color: ${({ textColor: textColor })=>textColor || "#f1f1f1"};
  max-height: 50vh;
  width: 60vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-wrap: break-word;
`;
const $ad02508aff8c5e68$export$6bfd3ea58737ed9a = (0, ($parcel$interopDefault($gXNCa$styledcomponents))).div`
  ${({ style: style })=>style};
`;
const $ad02508aff8c5e68$export$5416ae46f9cf08bf = (0, ($parcel$interopDefault($gXNCa$styledcomponents))).div`

    height:40px;
    width:40px;
    border-radius:100px;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 1px solid #3cc8b4;
    -webkit-animation: breathing 4s ease-out infinite normal;
    animation: breathing 4s ease-out infinite normal;
    background: #3cc8b4;
    color: white;
    -webkit-font-smoothing: antialiased;
    text-align: center;    
    font-weight:bold;
    position:absolute;
    bottom:-20px;
    right:-20px;
    font-family:silkscreenBold;
    &: hover{
      cursor: pointer;
    }
@-webkit-keyframes breathing {
  0% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  25% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  100% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
  }

  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
  }

  100% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
  }
}

  
`;


const $c326a28814121823$export$97685c2900b1d23a = ({ setSceneIndex: setSceneIndex, textArr: textArr, speaker: speaker, buildMode: buildMode, fontFamily: fontFamily, textColor: textColor, bgColor: bgColor })=>{
    const [textArrayIndex, setTextArrayIndex] = (0, $gXNCa$react.useState)(0);
    const [displayedElements, setDisplayedElements] = (0, $gXNCa$react.useState)([]);
    const [responseOptions, setResponseOptions] = (0, $gXNCa$react.useState)([]);
    const [showButton, setShowButton] = (0, $gXNCa$react.useState)(false);
    const intervalRef = (0, $gXNCa$react.useRef)();
    const presetSpeeds = [
        0,
        40,
        100,
        500,
        700,
        800
    ];
    (0, $gXNCa$react.useEffect)(()=>{
        setDisplayedElements([]);
        handleDisplay();
        clearInterval(intervalRef.current);
    }, [
        textArrayIndex
    ]);
    (0, $gXNCa$react.useEffect)(()=>{
        if (showButton) {
            const handleKeyDown = (e)=>{
                if (textArrayIndex < textArr.length - 1 && e.keyCode === 65) setTextArrayIndex((index)=>index + 1);
            };
            document.addEventListener("keydown", handleKeyDown);
            return ()=>{
                document.removeEventListener("keydown", handleKeyDown);
            };
        }
    }, [
        showButton
    ]);
    const TextComponent = ({ text: text, speed: speed, style: style, wordIndex: wordIndex, responseOptions: responseOptions })=>{
        const [crawlText, setCrawlText] = (0, $gXNCa$react.useState)("");
        const [index, setIndex] = (0, $gXNCa$react.useState)(0);
        const intervalRef = (0, $gXNCa$react.useRef)();
        (0, $gXNCa$react.useEffect)(()=>{
            if (responseOptions) setResponseOptions(responseOptions);
            const interval = setInterval(()=>{
                setIndex((index)=>index + 1);
            }, speed);
            intervalRef.current = interval;
            return ()=>clearInterval(interval);
        }, []);
        (0, $gXNCa$react.useEffect)(()=>{
            if (index < text?.length) {
                if (showButton) setShowButton(false);
                setCrawlText((crawlText)=>crawlText + text[index]);
            } else {
                if (wordIndex === textArr[textArrayIndex].length - 1) setShowButton(true);
                clearInterval(intervalRef.current);
            }
        }, [
            index
        ]);
        return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $ad02508aff8c5e68$export$6bfd3ea58737ed9a), {
            style: style,
            children: crawlText
        });
    };
    const getDelay = (i)=>{
        let sum = 0;
        if (i !== 0) sum = textArr[textArrayIndex].slice(0, i).reduce((partialSum, a)=>partialSum + a.speed * a.text.length, 0);
        return sum;
    };
    const handleDisplay = ()=>{
        for(let i = 0; i < textArr[textArrayIndex]?.length; i++)setTimeout(()=>{
            if (typeof textArr[textArrayIndex][i] === "object" && !Array.isArray(textArr[textArrayIndex][i]) && textArr[textArrayIndex][i] !== null) setDisplayedElements((displayedElements)=>[
                    ...displayedElements,
                    /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)("div", {
                        children: [
                            buildMode && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)("div", {
                                style: {
                                    textAlign: "center",
                                    borderRadius: 10,
                                    fontSize: 12,
                                    fontFamily: "sans-serif",
                                    fontWeight: "bold"
                                },
                                children: [
                                    textArr[textArrayIndex][i].speed < 100 && "Fast	",
                                    textArr[textArrayIndex][i].speed >= 100 && textArr[textArrayIndex][i].speed <= 200 && "Medium	",
                                    textArr[textArrayIndex][i].speed > 200 && "Slow	",
                                    "(",
                                    textArr[textArrayIndex][i].speed * textArr[textArrayIndex][i].text.length,
                                    "ms)"
                                ]
                            }),
                            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)(TextComponent, {
                                text: textArr[textArrayIndex][i].text,
                                speed: textArr[textArrayIndex][i].speed,
                                style: textArr[textArrayIndex][i].style,
                                responseOptions: textArr[textArrayIndex][i]?.responseOptions,
                                wordIndex: i
                            }, i)
                        ]
                    }, i)
                ]);
            else {
                const interval = setInterval(()=>{}, textArr[textArrayIndex][i]);
                intervalRef.current = interval;
                return ()=>clearInterval(interval);
            }
        }, getDelay(i));
    };
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $ad02508aff8c5e68$export$2ebb7273d28c0c31), {
        children: [
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $ad02508aff8c5e68$export$e9661cbce5581fba), {
                fontFamily: fontFamily,
                textColor: textColor,
                bgColor: bgColor,
                children: speaker
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $ad02508aff8c5e68$export$2ea9fd34accb674d), {
                fontFamily: fontFamily,
                textColor: textColor,
                bgColor: bgColor,
                children: [
                    displayedElements,
                    showButton && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $ad02508aff8c5e68$export$5416ae46f9cf08bf), {
                        onClick: ()=>{
                            if (textArrayIndex < textArr.length - 1) setTextArrayIndex((index)=>index + 1);
                        },
                        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
                            children: "A"
                        })
                    })
                ]
            }),
            responseOptions.map((option, index)=>/*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
                    onClick: option.onClick,
                    style: {
                        backgroundColor: "green",
                        padding: 10,
                        margin: 10,
                        color: "white",
                        cursor: "pointer"
                    },
                    children: option.text
                }, index))
        ]
    });
};






//# sourceMappingURL=index.js.map
