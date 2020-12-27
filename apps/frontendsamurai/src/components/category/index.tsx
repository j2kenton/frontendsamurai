import React from 'react';
import styled from 'styled-components';
import Screen from '../../components/screen';

const ContentWrapper = styled.div`
  padding: 10vw;
  line-height: 1.5;
  &.title {
    text-transform: uppercase;
    text-align: center;
  }
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
      {screens.map(({ title = '', subtitle = '', paragraphs = [] }) => (
        <Screen key={title} className="colored" color={color} previousColor={previousColor} >
          <ContentWrapper>
            {title && <h1>{title}</h1>}
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
