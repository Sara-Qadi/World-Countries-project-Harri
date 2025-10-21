import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeToggle from "./ui/themeToggle/themeToggle";
import "./App.css";
import HomePageContainer from "./pages/homePage/homePageContainer";
import CountryDetailsContainer from "./pages/countryDetails/countryDetailsContainer";

function App() {
  return (
    <Router>
      <header className="navbar">
        <h1>Where in the world?</h1>
        <ThemeToggle />
      </header>

      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/country/:name" element={<CountryDetailsContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
