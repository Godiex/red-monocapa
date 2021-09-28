import React, {useState} from "react";
import "../register-travel.css";
import FormFile from "./FormFile";
import Card from "../../../../common/card/Card";
import InputParameters from "../../../../models/monolayer/inputParameters";
import TableFile from "./ModelTable";
import FormConfigurationNetwork from "./FormConfigurationNetwork";

const Monolayer = () => {
    let titleCard = "Red Neuronal";
    const [textFile, setFileText] = useState();
    let inputParameters ;

    if(textFile){
        inputParameters = new InputParameters(textFile);
    }

    return (
        <>
            <div className="background-container" >
                <div className="form site-card-border-less-wrapper" >
                    <Card content={<FormFile setFileText={setFileText} />} title={titleCard}/>
                    <br/>
                    {
                        inputParameters !== undefined ?
                            <Card content={<TableFile inputParameters={inputParameters} />} title={"Datos del archivo"}/> : <></>
                    }
                    <br/><br/><br/>
                </div>
                <div className="form site-card-border-less-wrapper" >
                    {
                        inputParameters !== undefined ?
                            <Card content={<FormConfigurationNetwork inputParameters={inputParameters} />} title={"Configuracion de la red"}/> : <></>
                    }
                    <br/><br/><br/>
                </div>
            </div>
        </>
    );
}

export default Monolayer;
