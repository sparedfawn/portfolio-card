import React, { useContext } from "react";

import { Context } from "../Context";

const Toggler = () => {
    const { theme, toggleTheme } = useContext(Context);

    return (
        <div className="toggler">
            <p className="toggler-light">Light</p>
            <div
                className={`toggler-slider toggler-slider-${theme}`}
                onClick={toggleTheme}
            >
                <div
                    className={`toggler-slider-circle toggler-slider-circle-${theme}`}
                ></div>
            </div>
            <p className="toggler-dark">Dark</p>
        </div>
    );
};

export default Toggler;
