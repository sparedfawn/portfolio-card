import React, { useContext } from "react";

import { ThemeContext } from "../ThemeContext";

const MainContent = ({ data }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <main className="mw-247 line-height-150 my-35">
            <h2 className={`font-700 font-size-16 main-title-${theme}`}>
                About
            </h2>
            <p className={`font-400 font-size-sm text-gray mt-2 main-discription-${theme}`}>
                {data.about}
            </p>

            <h2 className={`font-700 font-size-16 main-title-${theme} mt-15`}>
                Interests
            </h2>
            <p className={`font-400 font-size-sm text-gray mt-2 main-discription-${theme}`}>
                {data.interests}
            </p>
        </main>
    );
};

export default MainContent;
