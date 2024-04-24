import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Screen/Home";
import ErrorPage from "./Others/ErrorPage";
import Shows from "./Screen/Shows";
import Movies from "./Screen/Movies";
import Categories from "./Screen/Categories";
import Search from "./Screen/Search";

import Blog from './OtherScreen/Blog';
import AboutUs from './OtherScreen/AboutUs';
import Contacts from './OtherScreen/Contacts';
import History from './OtherScreen/History';
import LogIn from './OtherScreen/LogIn';
import Profile from './OtherScreen/Profile';
import Settings from './OtherScreen/Settings';
import SignIn from './OtherScreen/SignIn';
import Watchlist from './OtherScreen/Watchlist';

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

          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
