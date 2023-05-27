import "./assets/styles/App.scss";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
// import Aside from "./components/Aside";

function App() {
  return (
    <div>
      <div className="container d-flex">
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
