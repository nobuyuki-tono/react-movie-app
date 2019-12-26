import React, { Fragment } from "react";
import { Router } from "@reach/router";
import { createGlobalStyle } from "styled-components";
import Header from "./elements/Header";
import Home from "./Home";
import NotFound from "./NotFound";
import Movie from "./Movie";

const GlobalStyle = createGlobalStyle`
 body{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
`;

const App = () => {
  return (
    <Fragment>
      <Header />
      <Router>
        <Home path="/" />
        <Movie path="/:movieId" />
        <NotFound default />
      </Router>
      <GlobalStyle />
    </Fragment>
  );
};

export default App;
