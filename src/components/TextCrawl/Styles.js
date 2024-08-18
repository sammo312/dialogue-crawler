import styled from "styled-components";
export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpeakerProfileStyled = styled.div`
 
`;
export const SpeakerStyled = styled.div`
 
`;

export const TextWrapperStyled = styled.div`
  font-family: ${({ fontFamily }) => fontFamily || 'sans-serif'};
  position: relative; 
  background-color: ${({ bgColor }) => bgColor || 'black'};
  font-size: 25px;
  padding: 20px;
  border-radius: 0;
  color: ${({ textColor }) => textColor || '#f1f1f1'};
  max-height: 50vh;
  width: 60vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-wrap: break-word;
`;



export const TextComponentStyled = styled.div`
  ${({ style }) => style};
`;
export const DialogueButtonStyled = styled.div`

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
