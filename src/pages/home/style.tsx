import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Button } from "@/styles/Buttons";

import img from "@/public/static/img/background/dots.svg";

export const Header = styled("header", {
  backgroundColor: "$brand1",
  paddingTop: "8rem",
  paddingBottom: "4rem",
  backgroundImage: `url(${img})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom 1rem right 1rem",
  "@mobile": {
    padding: "6rem 0 2rem 0",
  },
});

export const HeaderContent = styled("div", {
  margin: "0 auto",
  maxWidth: "100%",
  width: "36rem",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const HeaderButtonsArea = styled(Flex, {
  marginTop: "$2",
  "@mobile": {
    flexDirection: "column",
    [`& ${Button}`]: {
      width: "100%",
    },
  },
});

export const StackSection = styled("section", {
  backgroundColor: "$grey4",
  padding: "2rem 0 1rem 0",
});

export const StackCards = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(11, 1fr)",
  padding: "3rem 0",
  gap: "2rem",
  overflow: "auto",

  "@mobile": {
    display: "flex",
    marginInline: "-1rem",
    paddingInline: "1rem",
    overflow: "auto",
  },
});

export const ProjectsArea = styled("section", {
  padding: "4rem 0 8rem 0",
});

export const ProjectsAreaSocialMediaMessage = styled("aside", {
  width: "32%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  position: "sticky",
  top: "10rem",

  "@mobile": {
    width: "100%",
    position: "static",
    order: "2",
    marginTop: "5rem",
  },
});

export const ProjectsAreaContent = styled("div", {
  position: "relative",
  top: "-10px",
  width: "60%",
  paddingLeft: "4rem",
  "@mobile": {
    width: "100%",
    paddingLeft: "0",
  },
});

export const ProjectAreaWrapperColumns = styled(Flex, {
  position: "relative",
  alignItems: "flex-start",
  "@mobile": {
    flexDirection: "column",
  },
});
