import React from 'react';
import styled from 'styled-components';
import { categories as categoriesList } from '../data/categories-list'
import Category from '../components/category';
import Screen from '../components/screen';
import DownArrow from '../components/down-arrow';

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
  display: inline-block;
  &.glowing {
    animation: 2s ease-in-out 0s infinite glow alternate;
  }
`;

const MassiveH1 = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  margin: 0.67em;
`;

const StyledH1 = styled.h1`
  /* margin: 0.67em; */
`;

const ContentWrapper = styled.div`
  padding: 5vw 10vw;
  line-height: 1.5;
`;

const Index: React.FunctionComponent = () => {
  return (
    <StyledApp>
      <Screen className="fullPage">
        <MassiveHeader className="initialHeader">
          <MassiveH1>DON'T BE A NINJA</MassiveH1>
        </MassiveHeader>
        <MassiveHeader className="permanentHeader">
          <MassiveH1>
            <GroupedText>BE A</GroupedText>{' '}
            <GroupedText className="glowing">FRONTEND SAMURAI</GroupedText>
            </MassiveH1>
          <DownArrow />
        </MassiveHeader>
      </Screen>
      <Screen className="colored intro">
        <ContentWrapper>
          <StyledH1>Welcome Samurai</StyledH1>
          <p>Before we start our journey, we must first clear our minds.</p>
          <p>Take a deep breath.</p>
          <p>Let go of your <em>ninja</em> training.</p>
          <p>And open your heart to the path of the <em>samurai</em>.</p>
          <DownArrow />
        </ContentWrapper>
      </Screen>
      {categoriesList.map(({ screens, name, color, previousColor }, categoryIndex) => (
        <Category key={name} screens={screens} title={name} color={color} previousColor={previousColor} isLastCategory={categoryIndex === categoriesList.length - 1} />
      ))}
      <Screen className="colored toBeContinued">
        <ContentWrapper>
          <hr/>
          <p>
            <GroupedText>&copy; 2020-2021</GroupedText>&nbsp;&middot;&nbsp;
            <GroupedText>Jonathan Kenton</GroupedText>&nbsp;&middot;&nbsp;
            <GroupedText>Aspiring Frontend Samurai</GroupedText>
          </p>
          <hr/>
        </ContentWrapper>
      </Screen>
    </StyledApp>
  );
};

export default Index;
