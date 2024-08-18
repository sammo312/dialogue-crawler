import { useEffect, useRef, useState } from "react";
import { ContainerStyled, DialogueButtonStyled, SpeakerStyled, TextComponentStyled, TextWrapperStyled } from "./Styles";

export const TextCrawl = ({
    setSceneIndex,
    textArr,
    speaker,
    buildMode,
    fontFamily,
    textColor,
    bgColor,
  }) => {
    const [textArrayIndex, setTextArrayIndex] = useState(0);
    const [displayedElements, setDisplayedElements] = useState([]);
    const [responseOptions, setResponseOptions] = useState([]);
    const [showButton, setShowButton] = useState(false);
  
    const intervalRef = useRef();
    const presetSpeeds = [0, 40, 100, 500, 700, 800];
  
    useEffect(() => {
      setDisplayedElements([]);
      handleDisplay();
      clearInterval(intervalRef.current);
    }, [textArrayIndex]);
  
    useEffect(() => {
      if (showButton) {
        const handleKeyDown = (e) => {
          if (textArrayIndex < textArr.length - 1 && e.keyCode === 65) {
            setTextArrayIndex((index) => index + 1);
          } else {
            // setSceneIndex(index => index + 1)
          }
        };
  
        document.addEventListener('keydown', handleKeyDown);
  
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }
    }, [showButton]);
  
    const TextComponent = ({ text, speed, style, wordIndex, responseOptions }) => {
      const [crawlText, setCrawlText] = useState('');
      const [index, setIndex] = useState(0);
      const intervalRef = useRef();
  
      useEffect(() => {
        if (responseOptions) {
          setResponseOptions(responseOptions);
        }
        const interval = setInterval(() => {
          setIndex((index) => index + 1);
        }, speed);
        intervalRef.current = interval;
        return () => clearInterval(interval);
      }, []);
  
      useEffect(() => {
        if (index < text?.length) {
          if (showButton) {
            setShowButton(false);
          }
          setCrawlText((crawlText) => crawlText + text[index]);
        } else {
          if (wordIndex === textArr[textArrayIndex].length - 1) {
            setShowButton(true);
          }
          clearInterval(intervalRef.current);
        }
      }, [index]);
  
      return <TextComponentStyled style={style}>{crawlText}</TextComponentStyled>;
    };
  
    const getDelay = (i) => {
      let sum = 0;
      if (i !== 0) {
        sum = textArr[textArrayIndex].slice(0, i).reduce(
          (partialSum, a) => partialSum + a.speed * a.text.length,
          0
        );
      }
      return sum;
    };
  
    const handleDisplay = () => {
      for (let i = 0; i < textArr[textArrayIndex]?.length; i++) {
        setTimeout(() => {
          if (
            typeof textArr[textArrayIndex][i] === 'object' &&
            !Array.isArray(textArr[textArrayIndex][i]) &&
            textArr[textArrayIndex][i] !== null
          ) {
            setDisplayedElements((displayedElements) => [
              ...displayedElements,
              <div key={i}>
                {buildMode && (
                  <div
                    style={{
                      textAlign: 'center',
                      borderRadius: 10,
                      fontSize: 12,
                      fontFamily: 'sans-serif',
                      fontWeight: 'bold',
                    }}
                  >
                    {textArr[textArrayIndex][i].speed < 100 && 'Fast\t'}
                    {textArr[textArrayIndex][i].speed >= 100 &&
                      textArr[textArrayIndex][i].speed <= 200 &&
                      'Medium\t'}
                    {textArr[textArrayIndex][i].speed > 200 && 'Slow\t'}
                    ({textArr[textArrayIndex][i].speed * textArr[textArrayIndex][i].text.length}ms)
                  </div>
                )}
                <TextComponent
                  key={i}
                  text={textArr[textArrayIndex][i].text}
                  speed={textArr[textArrayIndex][i].speed}
                  style={textArr[textArrayIndex][i].style}
                  responseOptions={textArr[textArrayIndex][i]?.responseOptions}
                  wordIndex={i}
                />
              </div>,
            ]);
          } else {
            const interval = setInterval(() => {}, textArr[textArrayIndex][i]);
            intervalRef.current = interval;
  
            return () => clearInterval(interval);
          }
        }, getDelay(i));
      }
    };
  
    return (
      <ContainerStyled>
        <SpeakerStyled fontFamily={fontFamily} textColor={textColor} bgColor={bgColor}>
          {speaker}
        </SpeakerStyled>
        <TextWrapperStyled fontFamily={fontFamily} textColor={textColor} bgColor={bgColor}>
          {displayedElements}
          {showButton && (
            <DialogueButtonStyled
              onClick={() => {
                if (textArrayIndex < textArr.length - 1) {
                  setTextArrayIndex((index) => index + 1);
                } else {
                  // setSceneIndex(index => index + 1)
                }
              }}
            >
              <div>A</div>
            </DialogueButtonStyled>
          )}
        </TextWrapperStyled>
        {responseOptions.map((option, index) => (
          <div
            key={index}
            onClick={option.onClick}
            style={{ backgroundColor: 'green', padding: 10, margin: 10, color: 'white', cursor: 'pointer' }}
          >
            {option.text}
          </div>
        ))}
      </ContainerStyled>
    );
  };
  
