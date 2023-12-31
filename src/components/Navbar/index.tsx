import { useState, useContext } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoImage,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
  NavbarDropdownMenu,
  NavbarDropdownButton,
  LanguageImage,
  LanguageItems
} from "./style";

import { FaGithub, FaLinkedinIn, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container } from "@/styles/Global";
import { AppContext } from "./../../providers/appProvider";
import { language } from "@/utils/languagesData";

import brazilFlag from "../../public/static/img/flags/brazil.png";
import usaFlag from "../../public/static/img/flags/usa.png";
import spainFlag from "../../public/static/img/flags/spain.png";
import japanFlag from "../../public/static/img/flags/japan.png";
import ukrainFlag from "../../public/static/img/flags/ukrain.jpg";
import germanFlag from "../../public/static/img/flags/germany.png";
import franceFlag from "../../public/static/img/flags/france.png";
import russiaFlag from "../../public/static/img/flags/russia.png";
import chinaFlag from "../../public/static/img/flags/china.png";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {
  const isWide = useMedia({ maxWidth: "991px" });

  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);


  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoImage
              src={`https://github.com/${userData.githubUser}.png`}
              alt={userData.nameUser}
              title={userData.nameUser}
              width={"48px"}
              height={"48px"}
            />
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        {isWide ? open && <NavLinks /> : <NavLinks />}
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {

  const { languageText, setLanguageText } = useContext(AppContext);

  function changeLanguageFlags() {
    if (languageText.language === "portuguese") {
      return brazilFlag;
    } else if (languageText.language === "english") {
      return usaFlag;
    } else if (languageText.language === "spanish") {
      return spainFlag;
    } else if (languageText.language === "japanese") {
      return japanFlag;
    } else if (languageText.language === "ukrainian") {
      return ukrainFlag;
    } else if (languageText.language === "german") {
      return germanFlag;
    } else if (languageText.language === "french") {
      return franceFlag;
    } else if (languageText.language === "russian") {
      return russiaFlag;
    } else if (languageText.language === "chinese") {
      return chinaFlag;
    }
  }

  return (
    <NavbarLinks>
      {userData.whatsappNumber && (
        <Button
          type="primary"
          as="a"
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=+55${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
        >
          {languageText.whatsButton}
        </Button>
      )}

      {userData.githubUser && (
        <Button
          type="icon"
          target="_blank"
          as="a"
          aria-label="Github"
          href={`https://github.com/${userData.githubUser}`}
        >
          <FaGithub />
        </Button>
      )}

      {userData.linkedinUser && (
        <Button
          type="icon"
          target="_blank"
          as="a"
          aria-label="LinkedIn"
          href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
        >
          <FaLinkedinIn />
        </Button>
      )}
      <NavbarDropdownButton type="icon" aria-label="language"
      // onClick={toggleLanguageMenu}
      ><LanguageImage src={changeLanguageFlags()} />  {languageText.title}
        <NavbarDropdownMenu  >
          <div />
          <LanguageItems onClick={() => setLanguageText(language.portuguese)}>
            <LanguageImage src={brazilFlag} /> {languageText.titles.portuguese}</LanguageItems>
          <LanguageItems onClick={() => setLanguageText(language.english)}>
            <LanguageImage src={usaFlag} /> {languageText.titles.english}</LanguageItems>
          <LanguageItems onClick={() => setLanguageText(language.spanish)}>
            <LanguageImage src={spainFlag} /> {languageText.titles.spanish}</LanguageItems>
          <LanguageItems onClick={() => setLanguageText(language.japanese)}>
            <LanguageImage src={japanFlag} /> {languageText.titles.japanese}</LanguageItems>
          <LanguageItems onClick={() => setLanguageText(language.ukrainian)}>
            <LanguageImage src={ukrainFlag} /> {languageText.titles.ukrainian}</LanguageItems>
          <LanguageItems onClick={() => setLanguageText(language.german)}>
            <LanguageImage src={germanFlag} /> {languageText.titles.german}</LanguageItems>
          <LanguageItems onClick={() => setLanguageText(language.french)}>
            <LanguageImage src={franceFlag} /> {languageText.titles.french}</LanguageItems>
          <LanguageItems onClick={() => setLanguageText(language.russian)}>
            <LanguageImage src={russiaFlag} /> {languageText.titles.russian}</LanguageItems>
          <LanguageItems onClick={() => setLanguageText(language.chinese)}>
            <LanguageImage src={chinaFlag} /> {languageText.titles.chinese}</LanguageItems>
        </NavbarDropdownMenu>
      </NavbarDropdownButton>
    </NavbarLinks >
  );
};
