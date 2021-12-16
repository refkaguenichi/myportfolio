import "./App.css";
import Profile from "./PortfolioContainer/Home/Profile";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Projects from "./PortfolioContainer/Projects/Projects";
import Skills from "./PortfolioContainer/Skills/Skills";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Footer from "./PortfolioContainer/Footer/Footer";
import Appbar from "./PortfolioContainer/Appbar/Appbar";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Profile />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
