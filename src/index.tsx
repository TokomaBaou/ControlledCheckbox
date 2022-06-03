import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { ControlledCheckbox } from "./ControlledCheckbox";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ControlledCheckbox />
    </StyledEngineProvider>
  </React.StrictMode>
);
