import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/index.routes";
import { ThemeProvider, createTheme } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  typography: {
    fontFamily: "DM Sans",
    body1: {
      fontSize: "14px",
    },
    h6: { fontSize: "20px" },
    button: {
      textTransform: "capitalize",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="h-screen w-full bg-blue-50 overflow-hidden">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
