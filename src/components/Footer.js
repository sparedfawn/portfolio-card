import React, { useContext } from "react";

import Twitter from "../images/Twitter Icon.svg";
import Facebook from "../images/Facebook Icon.svg";
import Instagram from "../images/Instagram Icon.svg";
import GitHub from "../images/GitHub Icon.svg";

import { ThemeContext } from "../ThemeContext";

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <footer className={`w-100 br-btm-10 py-15 footer-${theme}`}>
            <div className="flex justify-center">
                <img
                    src={Twitter}
                    width="25px"
                    alt="twitter"
                    className="mx-10"
                />

                <img
                    src={Facebook}
                    width="25px"
                    alt="facebook"
                    className="mx-10"
                />

                <img
                    src={Instagram}
                    width="25px"
                    alt="instagram"
                    className="mx-10"
                />

                <img 
                    src={GitHub} 
                    width="25px" 
                    alt="github" 
                    className="mx-10" 
                />
            </div>
        </footer>
    );
};

export default Footer;
