import React, { useContext } from "react";

import HeaderButtonSection from "./HeaderButtonSection";
import { ThemeContext } from "../ThemeContext";

const HeaderContent = ({ data }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="flex flex-direction align-center">
            <h1 className={`font-700 font-size-25 mt-15 title-color-${theme}`}>
                {data.name}
            </h1>
            <h3 className={`font-400 font-size-md mt-2 subtitle-color-${theme}`}>
                {data.position}
            </h3>
            <h5 className={`font-400 font-size-sm line-height-150 mt-7 mb-15 discription-color-${theme}`}>
                {data.website}
            </h5>
            <HeaderButtonSection />
        </div>
    );
};

export default HeaderContent;
