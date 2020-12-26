import React from 'react';
import styled from 'styled-components';
import categoriesList from './categories-list'
import Category from '../components/category';

import 'fonts/fonts.css';
import './normalize.css';

const StyledApp = styled.div`
  background-color: #000;
  font-family: 'Overlock', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  position: absolute;
  width: 100%;
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

const Screen = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 2rem;
  &.colored {
    background-color: #060118;
    color: white;
  }
  &.intro {
    background: linear-gradient(180deg, #000000 0%, #060118 100%);
    text-align: center;
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

const StyledH1 = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  margin: 0.67em;
`;

const ContentWrapper = styled.div`
  padding: 5rem;
  line-height: 1.5;
  &.toBeContinued {
    text-align: center;
  }
`;

const FlipperTextWrapper = styled.p`
  transform: rotate(180deg);
`;

const Index: React.FunctionComponent = () => {
  return (
    <StyledApp>
      <Screen>
        <StyledHeader className="initialHeader">
          <StyledH1>DON'T BE A NINJA</StyledH1>
        </StyledHeader>
        <StyledHeader className="permanentHeader">
          <StyledH1>
            <GroupedText>BE A</GroupedText>{' '}
            <GroupedText className="glowing">FRONTEND SAMURAI</GroupedText>
          </StyledH1>
        </StyledHeader>
      </Screen>
      <Screen className="colored intro">
        <ContentWrapper>
          <h1>Welcome Samurai</h1>
          <p>Before we start our journey, we must first clear our minds.</p>
          <p>Take a deep breath.</p>
          <p>Let go of your <em>ninja</em> training.</p>
          <p>And open your heart to the path of the <em>samurai</em>.</p>
          <FlipperTextWrapper>^</FlipperTextWrapper>
        </ContentWrapper>
      </Screen>
      {categoriesList.map(({ screens, name, color, previousColor }) => <Category screens={screens} title={name} color={color} previousColor={previousColor} />)}
      <Screen className="colored">
        <ContentWrapper className="toBeContinued">
          <p>to be continued...</p>
        </ContentWrapper>
      </Screen>
    </StyledApp>
  );
};

export default Index;
