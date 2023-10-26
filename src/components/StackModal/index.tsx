import { Ref, useContext, useState } from "react";
import {
    ClosingModal, ModalContainer, ModalHeader, ModalWrapper,
    modalCloseAnimation, modalCloseToRightAnimation,
    modalCloseToLeftAnimation, modalOpenAnimation,
    NextModalButton,
    ModalFooter,
    PreviousModalButton
} from "./style";
import { AppContext } from "../../providers/appProvider";
import { stackData } from "../../utils/stackData";
import useOutClick from "../../hooks/useOutClick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";


interface iStackModal {
    setModalStack: React.Dispatch<React.SetStateAction<boolean>>;
    stackNumber: number;
}

export const StackModal = ({ setModalStack, stackNumber }: iStackModal) => {

    const { languageText } = useContext(AppContext);

    const [stackNum, setStackNum] = useState(stackNumber);
    const [dataStack, setDataStack] = useState(stackData[stackNum]);
    const [closeModalAnimation, setCloseModalAnimation] = useState(`${modalOpenAnimation} .5s ease`);
    const [nextModal, setNextModal] = useState("none");

    const modalRef = useOutClick(handleCloseModal);

    function previousStack() {

        setNextModal(`${modalCloseToLeftAnimation} .5s ease`);
        setTimeout(() => {
            setStackNum(stackNum - 1);
            setDataStack(stackData[stackNum - 1]);
            setNextModal(`${modalOpenAnimation} .2s ease`);
        }, 400);
    }

    function nextStack() {

        setNextModal(`${modalCloseToRightAnimation} .5s ease`);
        setTimeout(() => {
            setStackNum(stackNum + 1);
            setDataStack(stackData[stackNum + 1]);
            setNextModal(`${modalOpenAnimation} .2s ease`);
        }, 300)
    }

    function handleCloseModal() {
        setCloseModalAnimation(`${modalCloseAnimation} .5s ease`);
        setTimeout(() => {
            setModalStack(false);
        }, 450);
    }

    return <ModalWrapper role="dialog" style={{ animation: `${closeModalAnimation}` }}>
        <ModalContainer ref={modalRef as Ref<HTMLDivElement>} style={{ animation: `${nextModal}` }}>
            <ClosingModal onClick={handleCloseModal}>X</ClosingModal>
            <ModalHeader>
                <h2>{dataStack.title}</h2>
                {typeof dataStack.img === "string" ? (
                    <img src={dataStack.img} alt={"Stack img " + dataStack.title} height="40px" width="40px" />
                ) : (
                    <dataStack.img size={40} />
                )}
            </ModalHeader>
            <p className="text">{languageText.stacksDescription[dataStack.stack].description}</p>
            <ModalFooter>
                <span>{languageText.stacksDescription.footerMessage}</span>
                <a href={dataStack.link} target="_blank">{dataStack.link}</a>
            </ModalFooter>
            {stackNum > 0 &&
                <PreviousModalButton onClick={previousStack}><GrFormPrevious size={50} />
                </PreviousModalButton>}
            {stackNum < stackData.length - 1 &&
                <NextModalButton onClick={nextStack}><GrFormNext size={50} />
                </NextModalButton>}
        </ModalContainer>
    </ModalWrapper>
}