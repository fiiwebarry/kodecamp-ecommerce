import React, { useContext, useState } from "react";

const productContext = React.createContext();

export const productContextProvider = ({ children }) => {

    return (
        <productContextProvider value={ }>

            {children}
        </productContextProvider>
    )
};

export const useGlobalContext = () => {

    return useContext(productContext)
}