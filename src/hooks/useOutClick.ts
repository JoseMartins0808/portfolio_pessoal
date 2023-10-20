import { useEffect, useRef } from "react";

function useOutClick(callback: () => void) {
    const reference = useRef<null | HTMLElement>(null);

    useEffect(() => {
        const handleOutEvent = (event: Event) => {
            if (
                !(event.target instanceof Node) ||
                !reference.current?.contains(event.target)
            ) {
                if (callback) callback();
            }
        };

        window.addEventListener("mousedown", handleOutEvent);

        return () => {
            window.removeEventListener("mousedown", handleOutEvent);
        }
    }, [callback]);

    return reference;
};

export default useOutClick;