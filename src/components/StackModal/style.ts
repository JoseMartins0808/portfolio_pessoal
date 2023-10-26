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

const modalOpenAnimation = keyframes({
    "0%": {
        transform: "scale(1.2)",
        opacity: 0
    },
    "100%": {
        transform: "scale(1)",
        opacity: 1
    }
});

export const modalCloseAnimation = keyframes({
    "0%": {
        transform: "scale(1)",
        opacity: 1
    },
    "100%": {
        transform: "scale(1.2)",
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

export const ModalContainer = styled("div", {
    width: "95%",
    margin: "6.5rem auto 0",
    backgroundColor: "$grey4",
    height: "fit-content",
    maxHeight: "500px",
    // overflowY: "auto",
    borderRadius: "5px",
    padding: "1rem",
    position: "relative",
    maxWidth: "600px",
    animation: `${modalOpenAnimation} .5s ease`,

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

    "& h2": {
        marginRight: "1rem"
    }
});

export const ClosingModal = styled("span", {
    position: "absolute",
    top: "10px",
    right: "10px",
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

export const NextModalButton = styled("button", {
    position: "fixed",
    bottom: "-10%",
    right: "0px",
    border: "2px solid $grey1",
    borderRadius: "8px",



});
