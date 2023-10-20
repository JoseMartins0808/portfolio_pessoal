import { useState, useContext, Ref } from "react";
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
} from "./style";

import { FaGithub, FaLinkedinIn, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container } from "@/styles/Global";
import { AppContext } from "./../../providers/appProvider";
import useOutClick from "./../../hooks/useOutClick";
import { language } from "@/utils/languagesData";

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

  const [openLanguageMenu, setOpenLanguageMenu] = useState(false);
  const { languageText, setLanguageText } = useContext(AppContext);

  const menuDropdownRef = useOutClick(() => setOpenLanguageMenu(false));

  function toggleLanguageMenu() {
    setOpenLanguageMenu(!openLanguageMenu);
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
      <Button onClick={toggleLanguageMenu}>{languageText.title}</Button>
      {openLanguageMenu && <NavbarDropdownMenu ref={menuDropdownRef as Ref<HTMLDivElement>}>
        <span onClick={() => setOpenLanguageMenu(false)}>X</span>
        <ul>
          <li onClick={() => setLanguageText(language.portuguese)}>{languageText.titles.portuguese}</li>
          <li onClick={() => setLanguageText(language.english)}>{languageText.titles.english}</li>
          <li onClick={() => setLanguageText(language.spanish)}>{languageText.titles.spanish}</li>
          <li onClick={() => setLanguageText(language.japanese)}>{languageText.titles.japanese}</li>
          <li onClick={() => setLanguageText(language.ukrainian)}>{languageText.titles.ukrainian}</li>
          <li onClick={() => setLanguageText(language.german)}>{languageText.titles.german}</li>
          <li onClick={() => setLanguageText(language.french)}>{languageText.titles.french}</li>
          <li onClick={() => setLanguageText(language.russian)}>{languageText.titles.russian}</li>
          <li onClick={() => setLanguageText(language.chinese)}>{languageText.titles.chinese}</li>
        </ul>
      </NavbarDropdownMenu>}
    </NavbarLinks>
  );
};
