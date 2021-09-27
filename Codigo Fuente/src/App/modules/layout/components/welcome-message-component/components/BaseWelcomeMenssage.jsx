import React from 'react';
import '../../../../../App.css';
import '../css/welcome-menssage.css';
import {Button} from "antd";
import video from "../../../../../../Includes/videos/video-1.mp4";
import {shallowEqual, useSelector} from "react-redux";
import {Link as LinkComponent} from "react-router-dom";

const BannerComponent = () => {
    const menuItem = useSelector(state => state?.menu[0], shallowEqual);

    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1>BIENVENIDO</h1>
            <p>¿ por que esperas para salir ?</p>
            <Button
                size={"small"}
                shape={"round"}
                color={"#fff"}
            >
                <LinkComponent to={`/Travel/RegisterTravel/${menuItem?.id}`}>
                    EMPIEZA A CONOCER EL MUNDO
                </LinkComponent>
            </Button>
        </div>
    );
}

export default BannerComponent;
