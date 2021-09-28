import React, {useEffect} from "react";
import {Button, Col, Form, Row, Input} from "antd";
import "../register-travel.css";
import {validateMessages} from "../../../../utils/ValidateMenssageForm";
import { UserOutlined } from '@ant-design/icons';

const FormConfigurationNetwork = ({inputParameters}) => {

    const [form] = Form.useForm();

    useEffect(() => {
        fillFields();
    }, [inputParameters]);

    const onFinish = () => {

    }

    const fillFields = () => {
        form.setFieldsValue({
            inputs : inputParameters.numberTickets,
            outputs : inputParameters.numberDesiredOutputs,
            outputsNetwork : inputParameters.numberDesiredOutputs,
            numberPatterns : inputParameters.numberPatterns
        });
    };

    return (
        <>
            <Form
                validateMessages={validateMessages}
                form={form}
                layout="vertical"
                style={{ height: '100%', width: "100%" }}
            >
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                        <Form.Item
                            label="Entradas"
                            name="inputs"
                        >
                            <Input disabled prefix={<UserOutlined />} />
                        </Form.Item>
                    </Col >
                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                        <Form.Item
                            label="Salidas"
                            name="outputs"
                        >
                            <Input disabled prefix={<UserOutlined />} />
                        </Form.Item>
                    </Col >
                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                        <Form.Item
                            label="Salidas de la red"
                            name="outputsNetwork"
                        >
                            <Input disabled  prefix={<UserOutlined />} />
                        </Form.Item>
                    </Col >
                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                        <Form.Item
                            label="Numero de patrones"
                            name="numberPatterns"
                        >
                            <Input disabled prefix={<UserOutlined />} />
                        </Form.Item>
                    </Col >
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Rata de aprendisaje"
                            name="learning"
                        >
                            <Input prefix={<UserOutlined />} />
                        </Form.Item>
                    </Col >
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Numero de Iteraciones"
                            name="numberIterations"
                        >
                            <Input  prefix={<UserOutlined />} />
                        </Form.Item>
                    </Col >
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Error Maestro"
                            name="masterMistake"
                        >
                            <Input  prefix={<UserOutlined />} />
                        </Form.Item>
                    </Col >
                </Row>

                <Row>
                    <Form.Item >
                        <Button type={"primary"} >
                            Entrenar Red
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        </>
    );
}

export default FormConfigurationNetwork;
