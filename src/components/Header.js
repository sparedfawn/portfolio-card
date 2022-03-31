import React from "react";
import Face from "../images/face-photo.png";
import HeaderContent from "./HeaderContent";

const Header = () => {
    return (
        <div>
            <img src={Face} width="317px" alt="Photo" />
            <HeaderContent />
        </div>
    );
};

export default Header;
