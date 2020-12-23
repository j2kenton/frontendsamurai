import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`


background-color: black;
font-family: 'Ubuntu', sans-serif;
  position: absolute;
  width: 100%;
  height: 100%;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  /* display: flex;
  align-items: center;
  justify-content: center; */

  &.invertColors {
    color: white;
  }

`;

const Screen = styled.div`
width: 100%;
height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Index = () => {
  return (
    <StyledApp>
      <Screen>
    <StyledHeader className="invertColors" >
      <h1>DON'T BE A NINJA</h1>
    </StyledHeader>
    </Screen>
    <Screen>
    <StyledHeader>
      <h1>BE A SAMURAI</h1>
    </StyledHeader>
    </Screen>
    </StyledApp>
  );
};

export default Index;
