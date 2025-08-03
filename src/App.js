import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  NavLink,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import "./App.css";
import Leaderboard from "./pages/Leaderboard";
import LeaderboardLanding from "./pages/LeaderboardLanding";
import LeaderboardEU from "./pages/LeaderboardEU";
import LeaderboardAP from "./pages/LeaderboardAP";
import About from "./pages/About";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";

function App() {
  return (
    // <BrowserRouter>
    <BrowserRouter future={{ v7_startTransition: true }}>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Navigate replace to="/homepage" />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/leaderboard" element={<LeaderboardLanding />}></Route>

        <Route path="/leaderboard/na" element={<Leaderboard />}></Route>
        <Route
          path="/leaderboard/:region/:itemUsername/:itemTagline"
          element={<Detail />}
        ></Route>
        <Route path="/leaderboard/eu" element={<LeaderboardEU />}></Route>
        <Route
          path="/leaderboard/:region/:itemUsername/:itemTagline"
          element={<Detail />}
        ></Route>
        <Route path="/leaderboard/ap" element={<LeaderboardAP />}></Route>
        <Route
          path="/leaderboard/:region/:itemUsername/:itemTagline"
          element={<Detail />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <footer>
        <NavLink to="/homepage" className="iconWrapper">
          <HiHome className="icon" />
          Homepage
        </NavLink>
        <NavLink to="/about" className="iconWrapper">
          <MdGroup className="icon" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
    // </BrowserRouter>
  );
}

export default App;
