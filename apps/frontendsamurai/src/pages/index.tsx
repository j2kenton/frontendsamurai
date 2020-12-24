import React from 'react';
import styled from 'styled-components';

import 'fonts/fonts.css';
import './normalize.css'

const StyledApp = styled.div`
  background-color: #000;
  font-family: 'Overlock', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledHeader = styled.header`

  position: absolute;
  text-align: center;

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    10% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

&.initialHeader {
  letter-spacing: 1em;
  color: #bbb;
  animation: 3s ease-in-out 0s 1 fadeOut;
  opacity: 0;
}

&.permanentHeader {
  letter-spacing: 1em;
  color: #fff;
  animation: 6s ease-in-out 0s 1 fadeIn;
  opacity: 1;
}

`;

const Screen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &.colored {
    background-color: #060118;
    color: white;
  }
`;

const StyledH1 = styled.h1`
  font-weight: 400;
  font-size: 3rem;
`;

const Index = () => {
  return (
    <StyledApp>
      <Screen>
        <StyledHeader className="initialHeader" >
          <StyledH1>DON'T BE A NINJA</StyledH1>
        </StyledHeader>
        <StyledHeader className="permanentHeader">
          <StyledH1>BE A FRONTEND SAMURAI</StyledH1>
        </StyledHeader>
      </Screen>
      <Screen className="colored">
        <StyledHeader>
          <h1>Frontend Samurai Academy</h1>
          <h3>coming soon...</h3>
        </StyledHeader>
      </Screen>
    </StyledApp>
  );
};

export default Index;
