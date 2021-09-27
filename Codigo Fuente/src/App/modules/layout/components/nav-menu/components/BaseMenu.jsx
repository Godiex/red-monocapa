import React from "react";
import "../css/menu.css";
import icon from "../../../../../../Includes/icons/menu.png";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

const BaseMenuComponent = ( ) => {

    const menuItems = useSelector(state => state['menu']);

    return (
        <>
            <input type="checkbox" id="btn-menu"/>
            <label htmlFor="btn-menu" >
                <img src={icon} alt=""/>
            </label>
            <nav className="menu">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <Link to={`/Travel/RegisterTravel/${item.id}`} >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default BaseMenuComponent;
