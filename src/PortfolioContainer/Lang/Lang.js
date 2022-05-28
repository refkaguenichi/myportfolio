import React, { useState } from "react"
import { useTranslation } from 'react-i18next';
import { IoLanguage } from "react-icons/io5";
 
const Lang = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);
 
    let changeLanguage = (e) => {
        // let language = e.target.value;
        switch (lang) {
          case "fr":
            i18n.changeLanguage("en");
            setLang("en");
            break;
          case "en":
          default:
            i18n.changeLanguage("fr");
            setLang("fr");
            break;
        }
    }
 
    return (
      <span onClick={changeLanguage} className="lang">
        <IoLanguage size={25} />
        <span>{lang === "en" ? "EN" : "FR"}</span>
      </span>
    );
}
 
export default Lang;