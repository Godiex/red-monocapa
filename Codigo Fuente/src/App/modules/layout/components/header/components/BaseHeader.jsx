import React from "react";
import "../css/header.css";
import logo from  "../../../../../../Includes/icons/Logo.png";
import {Link} from "react-router-dom";

const BaseHeaderComponent = ({menu}) => {
    return (
        <>
            <header>
                <div className="logo">
                    <Link to={"/Home"}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                {menu}
            </header>
        </>
    );
}

export default BaseHeaderComponent;
