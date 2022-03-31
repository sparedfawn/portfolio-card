import React, { useContext } from "react";

import HeaderButtonSection from "./HeaderButtonSection";
import { Context } from "../Context";

const HeaderContent = () => {
    const { theme } = useContext(Context);

    return (
        <div className="flex flex-direction align-center">
            <h1 className={`font-700 font-size-25 mt-15 title-color-${theme}`}>
                Laura Smith
            </h1>
            <h3 className={`font-400 font-size-md mt-2 subtitle-color-${theme}`}>
                Frontend Developer
            </h3>
            <h5 className={`font-400 font-size-sm line-height-150 mt-7 mb-15 discription-color-${theme}`}>
                laurasmith.website
            </h5>
            <HeaderButtonSection />
        </div>
    );
};

export default HeaderContent;
