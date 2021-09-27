import React, {useEffect, useState} from "react";
import "../register-travel.css";
import FormTrip from "./FormTrip";
import Card from "../../../../common/card/Card";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const RegisterPorposeTravel = () => {
    let titleCard = "Registrar propuesta viaje con : ";
    const { id } = useParams();
    const menuItem = useSelector(state => state.menu?.filter( x => x.id == id));
    const [title, setTitle] = useState(titleCard + menuItem[0]?.name);

    useEffect(() => {
        setTitle(titleCard + menuItem[0]?.name);
    }, [menuItem]);

    return (
        <>
            <div className="background-container" >
                <div className="wallpaper" >
                </div>
                <div className="form site-card-border-less-wrapper" >
                    <Card content={<FormTrip />} title={title}/>
                </div>
            </div>
        </>
    );
}

export default RegisterPorposeTravel;
