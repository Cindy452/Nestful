import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./index.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
  </ThemeProvider>,
  document.getElementById("root")
);
