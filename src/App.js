import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Screen/Home";
import ErrorPage from "./OtherScreen/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
