import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: #000;
  font-family: 'Ubuntu', 'Roboto', 'Helvetica', 'Arial', sans-serif;
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
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &.permanentHeader {
    color: #fff;
    animation: 6s ease-in-out 0s 1 fadeIn;
    opacity: 1;
  }

  &.initialHeader {
    color: #fff;
    animation: 3s ease-in-out 0s 1 fadeOut;
    opacity: 0;
  }

`;

const Screen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Index = () => {
  return (
    <StyledApp>
      <Screen>
        <StyledHeader className="initialHeader" >
          <h1>DON'T BE A NINJA</h1>
        </StyledHeader>
        <StyledHeader className="permanentHeader">
          <h1>BE A FRONTEND SAMURAI</h1>
        </StyledHeader>
      </Screen>
      <Screen>
        <StyledHeader>
          <h1>Frontend Samurai Academy</h1>
          <h3>coming soon...</h3>
        </StyledHeader>
      </Screen>
    </StyledApp>
  );
};

export default Index;
