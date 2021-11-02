import React, {useState} from "react";
import "../register-travel.css";
import FormFile from "./FormFile";
import Card from "../../../../common/card/Card";
import InputParameters from "../../../../models/monolayer/inputParameters";
import TableFile from "./ModelTable";
import FormConfigurationNetwork from "./FormConfigurationNetwork";
import {Col, Form, Input, Row} from "antd";
import {FullscreenExitOutlined, FullscreenOutlined, NumberOutlined} from "@ant-design/icons";

const MonolayerComponent = () => {

    let titleCard = "Red Neuronal";
    const [textFile, setFileText] = useState();
    let inputParameters;
    let monolayer;

    if(textFile){
        inputParameters = new InputParameters(textFile);
    }

    return (
        <>
            <div className="background-container" >
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card content={<FormFile setFileText={setFileText} />} title={titleCard}/>
                        <br/>
                        {
                            inputParameters !== undefined ?
                                <Card
                                    content={<TableFile inputParameters={inputParameters} />}
                                    title={"Datos del archivo"}
                                /> : <></>
                        }
                        <br/><br/><br/>
                    </Col >
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        {
                            inputParameters !== undefined ?
                                <Card
                                    content={<FormConfigurationNetwork inputParameters={inputParameters} />}
                                    title={"Configuracion de la red"}
                                /> : <></>
                        }
                        <br/><br/><br/>
                    </Col >
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <br/>
                        {
                            monolayer !== undefined ?
                                <Card
                                    content={<TableFile inputParameters={inputParameters} />}
                                    title={"Grafica en tiempo real"}
                                /> : <></>
                        }
                        <br/><br/><br/>
                    </Col >
                </Row>
            </div>
        </>
    );
}

export default MonolayerComponent;
