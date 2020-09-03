import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body {
    min-height: 100%;
  }
  body {
    font-family: "Lato", Arial, Helvetica, sans-serif;
    background-color: #FFD400;
  }
`;
const theme = {
  colors: {
    primary: "#00A0E4",
    secondary: "#FFD400",
    text: "#555555",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
