import React from "react";
import {Button, Col, Form, Row, Input, InputNumber} from "antd";
import "../register-travel.css";
import {validateMessages} from "../../../../utils/ValidateMenssageForm";
import { MessageOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import {success} from "../../../../utils/Notification";

const FormTrip = () => {

    const [form] = Form.useForm();
    const onReset = () => form.resetFields();

    const onFinish = (values) => {
        onReset();
        console.log(values);
        success("Tu información fue enviada con éxito, estaremos en contacto \n" +
            "contigo",5);
    }

    const getNameValidation = (value) => {
        let text = /[A-Za-z]/;
        if(value === undefined || value?.length === 0)
            return Promise.reject(new Error("Nombre es requerido"));

        if (!text.test(value)) {

            return Promise.reject(new Error("El nombre no puede tener caracteres especiales"));
        }
        return Promise.resolve();
    }

    const getValidationNumber = (value) => {
        let text = /[0-9]/;
        if (!text.test(value)) {

            return Promise.reject(new Error("El numero de telefono debe tener numeros"));
        }
        return Promise.resolve();
    }

    return (
        <>
            <Form
                validateMessages={validateMessages}
                form={form}
                onFinish={onFinish}
                layout="vertical"
                style={{ height: '100%', width: "100%" }}
            >
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={12} lg={24} xl={24}>
                        <Form.Item
                            label="Nombre completo"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    validator: async (_, value) => {
                                        return getNameValidation(value);
                                    },
                                },
                            ]}>
                            <Input prefix={<UserOutlined />} placeholder={"Nombre completo"}/>
                        </Form.Item>
                    </Col >
                </Row>
                <Row gutter={48}>
                    <Col xs={24} sm={24} md={12} lg={24} xl={24}>
                        <Form.Item
                            label="Correo"
                            name="email"
                            rules={[{ required: true, type: 'email' }]}>
                            <Input placeholder={"aqui su correo"} prefix={<MessageOutlined />}/>
                        </Form.Item>
                    </Col >
                </Row>
                <Row gutter={48}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item
                            label="Celular"
                            name="phone"
                            rules={[{
                                required: true,
                                validator: (_, value) => {
                                    return getValidationNumber(value);
                                },
                            }]}>
                            <Input placeholder={"301370797"} prefix={<PhoneOutlined />}/>
                        </Form.Item>
                    </Col >
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item
                            label="Edad"
                            name="age"
                            rules={[{ required: true, type: 'number', min: 18, max: 100 }]}>
                            <InputNumber placeholder={"18"} />
                        </Form.Item>
                    </Col >
                </Row>
                <Row>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" >
                            Registrar
                        </Button>
                        <Button >
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

export default FormTrip;
