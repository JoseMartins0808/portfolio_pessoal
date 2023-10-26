import { styled } from "@/styles/stitches.config";
import { keyframes } from "@stitches/react";

export const ModalWrapper = styled("div", {
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: "rgb(0,0,0,0.5)",
    zIndex: "15",
    height: "100vh",
    width: "100vw",
    backdropFilter: "blur(8px)",

});

export const ModalContainer = styled("div", {
    display: "Flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    margin: "6.5rem auto 0",
    backgroundColor: "$grey4",
    height: "500px",
    maxHeight: "500px",
    borderRadius: "5px",
    padding: "3rem 2rem",
    position: "relative",
    maxWidth: "600px",

    "& p": {
        textAlign: "justify",
        lineHeight: "1.5rem",
        fontFamily: "IBM Plex Sans",
        fontWeight: "500",
        marginBottom: "1rem",
        maxHeight: "300px",
        overflowY: "auto",
        padding: "0 10px"
    },

});

export const ModalHeader = styled("div", {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "1rem",
    alignSelf: "flex-start",

    "& h2": {
        marginRight: "1rem"
    }
});

export const ModalFooter = styled("div", {
    alignSelf: "flex-start",

    "& span": {
        textDecoration: "underline",
        marginRight: "5px"
    }
});

export const ClosingModal = styled("span", {
    position: "absolute",
    top: "5px",
    right: "5px",
    fontWeight: "normal",
    border: "2px solid $grey1",
    borderRadius: "20%",
    textAlign: "center",
    height: "25px",
    width: "25px",
    cursor: "pointer",
    transition: "ease .2s",

    "&:hover": {
        backgroundColor: "$grey2",
        color: "$grey5"
    }
});

const nextButtonAnimation = keyframes({
    "0%": { transform: "translateX(0)" },
    "50%": { transform: "translateX(2px)" },
    "100%": { transform: "translateX(0)" }
});

export const NextModalButton = styled("button", {
    position: "absolute",
    width: "48%",
    bottom: "-60px",
    right: "0px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "ease .2s",

    "&:hover": {
        backgroundColor: "$grey3"
    },

    "& svg": {
        animation: `${nextButtonAnimation} ease .5s infinite`
    }
});

const previousButtonAnimation = keyframes({
    "0%": { transform: "translateX(0)" },
    "50%": { transform: "translateX(-2px)" },
    "100%": { transform: "translateX(0)" }
});

export const PreviousModalButton = styled("button", {
    position: "absolute",
    width: "48%",
    bottom: "-60px",
    left: "0px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "ease .2s",

    "&:hover": {
        backgroundColor: "$grey3"
    },

    "& svg": {
        animation: `${previousButtonAnimation} ease .5s infinite`
    }
});

export const modalOpenAnimation = keyframes({
    "0%": {
        // transform: "scale(1)",
        opacity: 0
    },
    "100%": {
        // transform: "scale(1)",
        opacity: 1
    }
});

export const modalCloseAnimation = keyframes({
    "0%": {
        transform: "scale(1)",
        opacity: 1
    },
    "100%": {
        transform: "scale(1.05)",
        opacity: 0
    }
});

export const modalCloseToRightAnimation = keyframes({
    "0%": {
        transform: "translateX(0)",
        opacity: 1
    },
    "100%": {
        transform: "translateX(50%)",
        opacity: 0
    }
});

export const modalCloseToLeftAnimation = keyframes({
    "0%": {
        transform: "translateX(0)",
        opacity: 1
    },
    "100%": {
        transform: "translateX(-50%)",
        opacity: 0
    }
});
