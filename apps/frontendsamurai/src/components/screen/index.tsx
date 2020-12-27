import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ScreenComponent = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 3vw;
  &.colored {
    background-color: ${({ color }) => color};
    color: white;
  }
  &.intro {
    background: linear-gradient(180deg, #000000 0%, #060118 100%);
    text-align: center;
  }
  &.toBeContinued {
    text-align: center;
    background-color: #060118;
    padding-bottom: 10vw;
    padding-top: 5vw;
}
  }
  &.fullPage {
    height: 100vh;
  }
`;

const Category = ({ color, previousColor, className, children }) => {
  return (
    <ScreenComponent
      className={className}
      color={color}
      previousColor={previousColor}
    >
      {children}
    </ScreenComponent>
  );
};

Category.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  previousColor: PropTypes.string,
  className: PropTypes.string,
};

Category.defaultProps = {
  children: null,
  color: null,
  previousColor: null,
  className: null,
};

export default Category;
