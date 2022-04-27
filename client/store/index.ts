import React from "react";

export const StoresContext = React.createContext({

});

export const useStores = () => React.useContext(StoresContext);