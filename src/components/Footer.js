import React, { useContext } from "react";

import Twitter from "../images/Twitter Icon.svg";
import Facebook from "../images/Facebook Icon.svg";
import Instagram from "../images/Instagram Icon.svg";
import GitHub from "../images/GitHub Icon.svg";

import { Context } from "../Context";

const Footer = () => {
    const { theme } = useContext(Context);

    return (
        <footer className={`w-100 br-btm-10 py-15 footer-${theme}`}>
            <div className="flex justify-center">
                <a href="http://twitter.com" className="mx-10">
                    <img src={Twitter} width="25px" alt="twitter" />
                </a>
                <a href="http://facebook.com" className="mx-10">
                    <img src={Facebook} width="25px" alt="facebook" />
                </a>
                <a href="http://instagram.com" className="mx-10">
                    <img src={Instagram} width="25px" alt="instagram" />
                </a>
                <a href="http://github.com" className="mx-10">
                    <img src={GitHub} width="25px" alt="github" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
