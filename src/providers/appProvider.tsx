import { language } from "@/utils/languagesData";
import React, { createContext, useState } from "react";


interface iAppProvider {
    languageText: any;
    setLanguageText: React.Dispatch<React.SetStateAction<any>>;
}

interface iAppProps {
    children: React.ReactNode;
}

export const AppContext = createContext({} as iAppProvider);

export function AppProvider({ children }: iAppProps) {

    const [languageText, setLanguageText] = useState(language.portuguese);

    return <AppContext.Provider value={{
        languageText,
        setLanguageText
    }}>
        {children}
    </AppContext.Provider>
}
