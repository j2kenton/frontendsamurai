import React from 'react';
import styled from 'styled-components';

const FlipperTextWrapper = styled.p`
  transform: rotate(180deg);
`;

const DownArrow: React.FunctionComponent = () => <FlipperTextWrapper>^</FlipperTextWrapper>;

export default DownArrow;
