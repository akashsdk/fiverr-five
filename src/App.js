import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Screen/Home";
import ErrorPage from "./OtherScreen/ErrorPage";
import Shows from "./Screen/Shows";
import Movies from "./Screen/Movies";
import Categories from "./Screen/Categories";
import Search from "./Screen/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
