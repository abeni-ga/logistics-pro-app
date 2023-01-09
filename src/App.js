import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/index.routes";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "DM Sans",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="h-screen w-full bg-blue-50 overflow-hidden">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
