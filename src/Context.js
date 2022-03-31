import React, { useState } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <Context.Provider value={{ theme, toggleTheme }}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };
