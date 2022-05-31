import "./App.css";
import Profile from "./PortfolioContainer/Home/Profile";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Occupation from "./PortfolioContainer/Occupation/Occupation";
import Projects from "./PortfolioContainer/Projects/Projects";
import Skills from "./PortfolioContainer/Skills/Skills";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Footer from "./PortfolioContainer/Footer/Footer";
import Appbar from "./PortfolioContainer/Appbar/Appbar";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Appbar t={t} />
      <Profile t={t} />
      <AboutMe t={t} />
      <Occupation t={t} />
      <Skills t={t} />
      <Projects t={t} />
      <ContactMe t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
