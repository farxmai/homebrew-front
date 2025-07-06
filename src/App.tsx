import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRouter from "router";
import theme from "theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
