import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1185fe",
    },
    secondary: {
      main: blueGrey[900],
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
