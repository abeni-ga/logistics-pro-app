import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/index.routes";

function App() {
  return (
    <div className="h-screen w-full bg-blue-50">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
