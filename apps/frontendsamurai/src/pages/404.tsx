import React from 'react';
import styled from 'styled-components';
import Screen from '../components/screen';

const StyledApp = styled.div`
  background-color: #000;
  color: #fff;
  font-family: 'Overlock', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  position: absolute;
  width: 100%;
  font-size: 1.2rem;
`;

const MassiveHeader = styled.header`
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

  &.initialHeader {
    letter-spacing: 1vw;
    color: #bbb;
    animation: 3s ease-in-out 0s 1 fadeOut;
    opacity: 0;
    width: 100%;
  }

  &.permanentHeader {
    letter-spacing: 1vw;
    color: #fff;
    animation: 6s ease-in-out 0s 1 fadeIn;
    opacity: 1;
    line-height: 1.5;
    width: 100%;
  }
`;

const GroupedText = styled.span`
  @keyframes glow {
    from {
      text-shadow: 0 0 0.01em #fff, 0 0 0.02em #fff, 0 0 0.03em #000,
        0 0 0.04em #000, 0 0 0.05em #000, 0 0 0.06em #000, 0 0 0.07em #000;
    }
    to {
      text-shadow: 0 0 0.02em #fff, 0 0 0.03em #666, 0 0 0.04em #666,
        0 0 0.05em #666, 0 0 0.06em #666, 0 0 0.07em #666, 0 0 0.08em #666;
    }
  }
  display: block;
  &.glowing {
    animation: 2s ease-in-out 0s infinite glow alternate;
  }
`;

const MassiveH1 = styled.h1`
  font-weight: 400;
  font-size: 2rem;
  margin: 0.67em;
`;

const Index: React.FunctionComponent = () => {
  return (
    <StyledApp>
      <Screen className="fullPage">
        <MassiveHeader className="initialHeader">
          <MassiveH1>
            <GroupedText>404 Error</GroupedText>{' '}
            <GroupedText>Page not found</GroupedText>{' '}
            </MassiveH1>
          </MassiveHeader>
        <MassiveHeader className="permanentHeader">
          <MassiveH1>
            <GroupedText>Return to the path, young samurai.</GroupedText>
            <GroupedText className="glowing">Enlightment awaits.</GroupedText>
            </MassiveH1>
        </MassiveHeader>
      </Screen>
    </StyledApp>
  );
};

export default Index;
