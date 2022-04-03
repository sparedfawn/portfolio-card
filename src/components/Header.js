import React from "react";
import HeaderContent from "./HeaderContent";

const Header = ({ data }) => {
    return (
        <div>
            <img src={data.photo} width="317px" alt="Photo" />
            <HeaderContent data={data} />
        </div>
    );
};

export default Header;
