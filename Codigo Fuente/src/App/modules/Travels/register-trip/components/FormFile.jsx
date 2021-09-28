import React, {useState} from "react";
import {Button, Col, Form, Row, Input} from "antd";
import "../register-travel.css";
import {validateMessages} from "../../../../utils/ValidateMenssageForm";
import { UserOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import {success} from "../../../../utils/Notification";
import InputParameters from "../../../../models/monolayer/inputParameters";

const FormFile = ({setFileText}) => {

    const [form] = Form.useForm();

    const onChange = (event) => {
        const file = event.target.files[0];
        if( !file ) return;
        const fileReader = new FileReader();
        fileReader.readAsText( file );
        fileReader.onload = () => {
            setFileText(fileReader.result);
            success("Archivo cargado con exito",5);
        }
    }

    return (
        <>
            <Form
                validateMessages={validateMessages}
                form={form}
                layout="vertical"
                style={{ height: '100%', width: "100%" }}
            >
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={12} lg={24} xl={24}>
                        <Form.Item
                            label="Seleccione el archivo con el cual entrenara la red"
                            name="file"
                        >
                            <Input type={"file"} prefix={<UserOutlined />} onChange={onChange} />
                        </Form.Item>
                    </Col >
                </Row>
                <Row>
                    <Form.Item >
                        <Button type={"primary"} >
                            <Link to={"/Home"} >
                                Volver
                            </Link>
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        </>
    );
}

export default FormFile;
