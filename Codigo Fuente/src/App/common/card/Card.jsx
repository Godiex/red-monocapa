import React from "react";
import {Card} from "antd";
import "./card.css";

const CardComponent = ({content,title}) => {
    return (
        <>
            <Card
                id="desktop"
                className={"card"}
                title={title}
                bordered={true}
            >
                {content}
            </Card>
            <div id="mobile">
                {content}
            </div>
        </>

    );
}

export default CardComponent;
