import React from 'react';
import styled from 'styled-components';
import Screen from '../../components/screen';

const ContentWrapper = styled.div`
  padding: 0 10vw 5vw;
  line-height: 1.5;
  &.title {
    text-transform: uppercase;
    text-align: center;
    padding-top: 10vw;
    padding-bottom: 5vw;
  }
`;

const StyledH1 = styled.h1`
  border-top: ${({isFirstLesson})=> isFirstLesson ? "none" : "1px solid white"};
  padding-top: ${({isFirstLesson})=> isFirstLesson ? 0 : "10vw"};
`;

const Category = ({ screens, title, color, previousColor }) => {
  return (
    <>
      <Screen className="colored" color={color} previousColor={previousColor}>
        <ContentWrapper className="title">
          <hr />
          {title}
          <hr />
        </ContentWrapper>
      </Screen>
      {screens.map(({ title = '', subtitle = '', paragraphs = [] }, index) => (
        <Screen key={title} className="colored" color={color} previousColor={previousColor} >
          <ContentWrapper>
            {title && <StyledH1 isFirstLesson={index === 0} >{title}</StyledH1>}
            {subtitle && <h3>- {subtitle}</h3>}
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </ContentWrapper>
        </Screen>
      ))}
    </>
  );
};

export default Category;
