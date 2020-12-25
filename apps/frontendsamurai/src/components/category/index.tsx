import React from 'react';
import styled from 'styled-components';

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
  }
`;

const ContentWrapper = styled.div`
  padding: 5rem;
  line-height: 1.5;
  &.toBeContinued {
    text-align: center;
  }
`;

const Category = ({ screens }) => {
  return screens.map(({ title = '', subtitle = '', paragraphs = [] }) => (
    <Screen className="colored">
      <ContentWrapper>
        {title && <h1>{title}</h1>}
        {subtitle && <h3>- {subtitle}</h3>}
        {paragraphs.map((text) => (
          <p>{text}</p>
        ))}
      </ContentWrapper>
    </Screen>
  ));
};

export default Category;
