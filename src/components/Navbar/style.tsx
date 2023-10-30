import { styled } from "../../styles/stitches.config";
import { Flex, Container, colors } from "../../styles/Global";
import { Button } from "../../styles/Buttons";

export const Navbar = styled("nav", {
  background: "$mode",
  borderBottom: "2px solid $grey4",
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "1rem 0",
  width: "100%",
  zIndex: "99999",
  boxShadow: "-2px 3px 20px #888",

  [`& ${Container}`]: {
    display: "flex",
    justifyContent: "space-between",
    "@mobile": {
      flexDirection: "column"
    },
  },
});

export const LogoTipo = styled(Flex, {
  alignItems: "center",
});

export const LogoTipoImage = styled("img", {
  width: "3rem",
  height: "3rem",
  borderRadius: "50%",
  "@mobile": {
    width: "2.25rem",
    height: "2.25rem",
  }
});

export const LogoTipoText = styled("span", {
  fontSize: "1.25rem",
  fontWeight: 800,
  color: "$grey1",
  "@mobile": {
    fontSize: "1rem",
  }
});

export const NavbarLinks = styled(Flex, {
  "@mobile": {
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "$3",
    [`& ${Button}:nth-child(1)`]: {
      width: "100%",
      order: "3",
    },
    [`& ${Button}`]: {
      width: "48%",
      order: "1",
    },
  },
});

export const NavbarMobileArea = styled("div", {
  display: "flex",
  justifyContent: "space-between"
});

export const NavbarDropdownMenu = styled("ul", {
  position: "absolute",
  top: "40px",
  right: "-4px",
  width: "20vw",
  height: "fit-content",
  backgroundColor: "$mode",
  borderRadius: "0.5rem",
  maxWidth: "200px",
  padding: "0 .5rem .5rem .5rem",
  opacity: "0",
  transform: "translateY(-333px)",
  transition: "all ease .5s 200ms",
  zIndex: "-99999",

  "& div": {
    backgroundColor: "$mode",
    height: "24px"
  },

  "@mobile": {
    backgroundColor: "$mode",
    top: "135px",
    width: "200px",
    left: "-18px",
  },
});

export const LanguageItems = styled("li", {
  padding: "0.5rem",
  textDecoration: "none",
  transition: "0.2s ease",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  "&:hover": {
    backgroundColor: "$brand1",
  }
});

export const LanguageImage = styled("img", {
  width: "1.5rem",
  height: "1rem",
  borderRadius: "20%",
  marginRight: ".5rem"
});

export const NavbarDropdownButton = styled("button", {
  height: "2.75rem",
  appearance: "none",
  background: "$whiteFixed",
  color: "$grey1",
  fontWeight: "600",
  padding: "0 2rem",
  border: "2px solid $whiteFixed",
  borderRadius: "$1",
  cursor: "pointer",
  fontSize: "1rem",
  fontFamily: "$texts",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",
  position: "relative",
  variants: {
    type: {
      btLink: {
        background: "transparent",
        borderColor: "transparent",
      },
      icon: {
        borderColor: "$grey5",
        backgroundColor: "transparent",
      }
    },
    ...colors
  },

  "@mobile": {
    width: "48%",
  },

  [`&:hover ${NavbarDropdownMenu}`]: {
    transform: "translateY(0)",
    opacity: "1",
    zIndex: "-99999"
  },
});

