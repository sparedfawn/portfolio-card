import React, { useContext } from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Toggler from "./components/Toggler";
import { ThemeContext } from "./ThemeContext";
import { data } from "./data";

const App = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="bg-dark flex flex-direction align-center py-15">
            <Toggler />
            <div className={`mw-317 flex flex-direction align-center my-35 br-10 section-bg-${theme}`}>
                <Header data={data} />
                <MainContent data={data} />
                <Footer />
            </div>
        </div>
    );
};

export default App;
