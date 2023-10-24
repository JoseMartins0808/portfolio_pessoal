import { styled } from "@/styles/stitches.config";

export const ModalWrapper = styled("div", {
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: "rgb(0,0,0,0.5)",
    zIndex: "15",
    height: "100vh",
    width: "100vw"
});

export const ModalContainer = styled("div", {
    width: "90%",
    margin: "6.5rem auto 0",
    backgroundColor: "$grey5",
    height: "60vh",
    maxHeight: "700px",
    overflowY: "auto"
});


