import React, { Component } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import styled from "styled-components";

//CSS styled-components
const AppCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: "PT Sans", sans-serif;
`;

//End of CSS styled-components

const App = () => {
  return (
    <AppCont>
      <TopBar />
      <Header />
      <Content />
    </AppCont>
  );
};

export default App;
