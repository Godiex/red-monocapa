import React from "react";
import "../register-travel.css";

const TableFile = ({inputParameters}) => {
    return (
        <>
            <table id="customers">
                <tr>
                    {inputParameters.inputs.map((item, indexInputs) => (
                        <th key={indexInputs}>X{indexInputs}</th>
                    ))}
                    {inputParameters.outputs.map((item, indexOutputs) => (
                        <th key={indexOutputs}>YR{indexOutputs}</th>
                    ))}
                </tr>
                {inputParameters.dataFile.map((data, mainIndex) => (
                    <tr key={mainIndex}>
                        {data.inputs.map((item, index1) => (
                            <td key={index1}>{item}</td>
                        ))}
                        {data.outputs.map((item, index2) => (
                            <td key={index2} >{item}</td>
                        ))}
                    </tr>
                ))}
            </table>

        </>
    );
}

export default TableFile;
