import { Routes, Route } from "react-router-dom";
import ThemeToggle from "./ui/themeToggle/themeToggle";
import "./App.css";
import HomePageContainer from "./pages/homePage/homePageContainer";
import CountryDetailsContainer from "./pages/countryDetails/countryDetailsContainer";

function App() {
  return (
    <>
      <header className="navbar">
        <h1>Where in the world?</h1>
        <ThemeToggle />
      </header>

      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/country/:name" element={<CountryDetailsContainer />} />
        <Route path="*" element={<HomePageContainer />} /> {/* fallback */}
      </Routes>
    </>
  );
}

export default App;
