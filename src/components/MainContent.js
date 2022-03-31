import React, { useContext } from "react";

import { Context } from "../Context";

const MainContent = () => {
    const { theme } = useContext(Context);

    return (
        <main className="mw-247 line-height-150 my-35">
            <h2 className={`font-700 font-size-16 main-title-${theme}`}>
                About
            </h2>
            <p className={`font-400 font-size-sm text-gray mt-2 main-discription-${theme}`}>
                I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn.
            </p>

            <h2 className={`font-700 font-size-16 main-title-${theme} mt-15`}>
                Interests
            </h2>
            <p className={`font-400 font-size-sm text-gray mt-2 main-discription-${theme}`}>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                fanatic.
            </p>
        </main>
    );
};

export default MainContent;
