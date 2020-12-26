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
`;

const ContentWrapper = styled.div`
  padding: 5rem;
  line-height: 1.5;
  &.title {
    text-transform: uppercase;
    text-align: center;
  }
`;

const Category = ({ screens, title }) => {
  return (
    <>
      <Screen className="colored">
        <ContentWrapper className="title">
          <hr />
          {title}
          <hr />
        </ContentWrapper>
      </Screen>
      {screens.map(({ title = '', subtitle = '', paragraphs = [] }) => (
        <Screen className="colored">
          <ContentWrapper>
            {title && <h1>{title}</h1>}
            {subtitle && <h3>- {subtitle}</h3>}
            {paragraphs.map((text) => (
              <p>{text}</p>
            ))}
          </ContentWrapper>
        </Screen>
      ))}
    </>
  );
};

export default Category;
