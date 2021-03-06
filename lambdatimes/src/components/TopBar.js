import React from 'react';
import styled, {css} from "styled-components";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = styled.div`

width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  min-width: 1280px;

`;

const Container = styled.div`

  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  ${props => props.left ? css`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  `: null}

  ${props => props.center ? css`
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;`: null}

  ${props => props.right ? css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  `: null}

`;

const Span = styled.span`

cursor: pointer;
${props => props.left ? css`
margin-right: 25%;
  font-weight: bold;
`: null}

${props => props.center ? css`
margin-right: 5%;
:last-child {
  margin-right: 5%;
}
:hover{
  text-decoration: underline;
}
`: null}



`;


const TopBar = () => {
  return (
    <TopBarDiv>
      <Container>
        <Container left>
          <Span left>TOPICS</Span><Span left>SEARCH</Span>
          </Container>
        <Container center>
          <Span center>GENERAL</Span>
          <Span center>BROWNBAG</Span>
          <Span center>RANDOM</Span>
          <Span center>MUSIC</Span>
          <Span center>ANNOUNCEMENTS</Span>
          </Container>
        <Container right>
          <Span right>LOG IN</Span>
          </Container>
      </Container>
    </TopBarDiv>
  )
}

export default TopBar;