import React from "react";
import Email from "../images/Mail.svg";
import LinkedIn from "../images/linkedin.svg";

const HeaderButtonSection = () => {
    return (
        <div className="flex justify-center">
            <button className="flex justify-center align-center mx-10 w-115 h-34 br-5 bg-white box-shadow">
                <img src={Email} width="16px" alt="Email" className="mx-3" />
                <p className="font-500 font-size-14 line-height-16 mx-3 my-0">
                    Email
                </p>
            </button>
            <button className="flex justify-center align-center bg-blue text-white mx-10 w-115 h-34 br-5 box-shadow">
                <img
                    src={LinkedIn}
                    width="16px"
                    alt="LinkedIn"
                    className="mx-3"
                />
                <p className="font-500 font-size-14 line-height-16 mx-3 my-0">
                    LinkedIn
                </p>
            </button>
        </div>
    );
};

export default HeaderButtonSection;
