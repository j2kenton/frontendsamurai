import React from 'react';
import styled from 'styled-components';
import Screen from '../../components/screen';
import DownArrow from '../down-arrow';

const ContentWrapper = styled.div`
  padding-left: 10vw;
  padding-right: 10vw;
  line-height: 1.5;
  &.title {
    text-transform: uppercase;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }
`;

const Title = styled.h2`
  border-top: ${({isFirstLesson})=> isFirstLesson ? "none" : "1px solid white"};
  padding-top: ${({isFirstLesson})=> isFirstLesson ? 0 : "2.5rem"};
  padding-bottom: 0.2rem;
  margin-bottom: 0;
`;

const Subtitle = styled.h4`
  font-style: italic;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const DownArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
`;

const Category = ({ screens, title, color, previousColor, isLastCategory }) => {
  return (
    <>
      <Screen className="categoryTitle" color={color} previousColor={previousColor}>
        <ContentWrapper className="title">
          <hr />
          {title}
          <hr />
        </ContentWrapper>
      </Screen>
      {screens.map(({ title = '', subtitle = '', paragraphs = [] }, index) => (
        <Screen key={title} className="colored" color={color} previousColor={previousColor} >
          <ContentWrapper>
            {title && <Title isFirstLesson={index === 0} >{title}</Title>}
            {subtitle && <Subtitle>- {subtitle}</Subtitle>}
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </ContentWrapper>
        </Screen>
      ))}
      {!isLastCategory && (<DownArrowWrapper color={color} >
        <DownArrow />
      </DownArrowWrapper>)}
    </>
  );
};

export default Category;
