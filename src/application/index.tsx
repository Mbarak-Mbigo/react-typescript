import React from "react";
import { createGlobalStyle } from "styled-components";
import Demo from "../demo";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }  
`;

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Demo />
    </React.Fragment>
  );
};

export default App;
