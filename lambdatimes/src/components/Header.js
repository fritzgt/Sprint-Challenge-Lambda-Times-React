import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

//CSS styled-components
const HeaderSec = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Heading = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const Date = styled.span`
  margin-left: 25px;
  flex: 1;
`;

const Temp = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

//End of CSS styled-components

const Header = () => {
  return (
    <HeaderSec>
      <Date> SMARCH 32, 2018 </Date> <Heading> Lambda Times </Heading>
      <Temp> 98° </Temp>
    </HeaderSec>
  );
};

export default Header;
