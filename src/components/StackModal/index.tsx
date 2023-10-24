import { Ref, useContext, useState } from "react";
import { ModalContainer, ModalWrapper } from "./style";
import { AppContext } from "../../providers/appProvider";
import { stackData } from "../../utils/stackData";
import useOutClick from "../../hooks/useOutClick";


interface iStackModal {
    setModalStack: React.Dispatch<React.SetStateAction<boolean>>;
    stackNumber: number;
}

export const StackModal = ({ setModalStack, stackNumber }: iStackModal) => {

    const { languageText } = useContext(AppContext);
    const [stackNum, setStackNum] = useState(stackNumber);
    const [dataStack, setDataStack] = useState(stackData[stackNum]);

    const modalRef = useOutClick(() => setModalStack(false));

    function previousStack() {
        setStackNum(stackNum - 1);
        setDataStack(stackData[stackNum - 1]);
    }

    function nextStack() {
        setStackNum(stackNum + 1);
        setDataStack(stackData[stackNum + 1]);
    }
    // const isString = typeof Icon === "string";

    return <ModalWrapper role="dialog">
        <ModalContainer ref={modalRef as Ref<HTMLDivElement>} >
            <span onClick={() => setModalStack(false)}>X</span>
            <div>
                <h2>{dataStack.title}</h2>
                {typeof dataStack.img === "string" ? (
                    <img src={dataStack.img} alt={"Stack img " + dataStack.title} height="84px" width="84px" />
                ) : (
                    <dataStack.img size={84} />
                )}
            </div>
            <p>{languageText.stacksDescription[dataStack.stack].description}</p>
            <span>{languageText.stacksDescription.footerMessage} {dataStack.link}</span>
            <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                {stackNum > 0 && <p onClick={previousStack}>{"<"}</p>}
                {stackNum < stackData.length - 1 && <p onClick={nextStack}>{">"}</p>}
                <p>{stackNum}</p>
            </div>

        </ModalContainer>
    </ModalWrapper>
}