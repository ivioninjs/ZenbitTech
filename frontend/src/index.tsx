import React from "react";
import ReactDOM from "react-dom";
import "./font.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: Apercu Arabic Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
input,
label,
select,
button,
textarea
{
	margin:0;
	border:0;
	padding:0;
	display:inline-block;
	vertical-align:middle;
	white-space:normal;
	background:none;
	line-height:1;
	
	/* Browsers have different default form fonts */
	font-size:13px;
	font-family:Arial;
}
`;

const theme = {
  media: {
    phone: "(max-width: 996px)",
    tablet: "(max-width: 1440px) and (min-width: 996px)",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
