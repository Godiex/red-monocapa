import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row, Input, InputNumber, Select} from "antd";
import "../register-travel.css";
import {validateMessages} from "../../../../utils/ValidateMenssageForm";
import Monolayer from "../../../../models/monolayer/monolayer";
import {FullscreenExitOutlined, FullscreenOutlined, NumberOutlined, UserOutlined} from '@ant-design/icons';
import {Option} from "antd/es/mentions";

const FormConfigurationNetwork = ({inputParameters , monolayer}) => {

    const min = -1;
    const max = 2;
    const [form] = Form.useForm();
    const onReset = () => form.resetFields();
    const [layerNumbers, setLayerNumbers] = useState(undefined);

    const intermediaActivationFunctions = ["Sigmoide", "Gausiana", "Tangente Hiperbolica"];
    const outputsActivationFunctions = ["Sigmoide", "Gausiana", "Tangente Hiperbolica", "Lineal"];

    useEffect(() => {
        fillFields();
    }, [inputParameters]);

    const onFinish = (values) => {

    }

    const setRandomWeights = async () => {
        const values = await form.getFieldsValue();
        fillWeights(values);
    }

    const fillFields = () => {
        form.setFieldsValue({
            inputs : inputParameters.numberEntrys,
            entranceType : inputParameters.entranceType,
            outputsNetwork : inputParameters.numberDesiredOutputs,
            numberPatterns : inputParameters.numberPatterns
        });
    };

    const fillWeights = (value) => {

        let a = generateRandomWeights();
        for (const property in value) {
            if(property.includes("weight")){
                form.setFieldsValue({
                    [property] : generateRandomWeights()
                })
            }
        }
    };

    const generateRandomWeights = () => {
        return getRandomArbitrary(min, max);
    }

    const getRandomArbitrary = (min, max) =>  {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const getFields = () => {
        const count = inputParameters.numberEntrys * inputParameters.numberDesiredOutputs;
        const children = [];
        for (let i = 0; i < count; i++) {
            children.push(
                <Col span={4} key={i}>
                    <Form.Item
                        name={`weight${i}`}
                        label={`Peso ${i}`}
                        rules={[{ required: true, type: 'number', min: -1, max: 1 }]}
                    >
                        <InputNumber placeholder={`Peso ${i}`} />
                    </Form.Item>
                </Col>,
            );
        }
        return children;
    };

    const getFieldsNumberNeurons = () => {
        const count = layerNumbers;
        const children = [];
        for (let i = 0; i < count; i++) {
            children.push(
                <Col span={4} key={i}>
                    <Form.Item
                        name={`layer${i}`}
                        label={`Capa Oculta ${i}`}
                        rules={[{ required: true, type: 'number', min: 1, max: 100 }]}
                    >
                        <InputNumber placeholder={`Capa ${i}`} />
                    </Form.Item>
                </Col>,
            );
        }
        return children;
    };

    console.log(layerNumbers);

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
                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                        <Form.Item
                            label="Entradas"
                            name="inputs"
                        >
                            <Input disabled prefix={<FullscreenExitOutlined />} />
                        </Form.Item>
                    </Col >
                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                        <Form.Item
                            label="Salidas de la red"
                            name="outputsNetwork"
                        >
                            <Input disabled  prefix={<FullscreenOutlined />} />
                        </Form.Item>
                    </Col >
                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                        <Form.Item
                            label="Numero patrones"
                            name="numberPatterns"
                        >
                            <Input disabled prefix={<NumberOutlined />} />
                        </Form.Item>
                    </Col >
                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                        <Form.Item
                            label="Tipo de Entrada"
                            name="entranceType"
                        >
                            <Input disabled prefix={<FullscreenOutlined />} />
                        </Form.Item>
                    </Col >
                </Row>
                <h3>Parametros de entrenamiento</h3>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Form.Item
                            label="Rata de aprendisaje"
                            name="learningRat"
                            rules={[{ required: true, type: 'number', min: -1, max: 1 }]}
                        >
                            <InputNumber  prefix={<UserOutlined />} />
                        </Form.Item>
                    </Col >
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Form.Item
                            label="Numero de Iteraciones"
                            name="numberIterations"
                            rules={[{ required: true, type: 'number', min: 1, max: 99999 }]}
                        >
                            <InputNumber   prefix={<UserOutlined />} />
                        </Form.Item>
                    </Col >
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Form.Item
                            label="Error maximo permitido"
                            name="maximumErrorAllowed"
                            rules={[{ required: true, type: 'number', min: 1, max: 100 }]}
                        >
                            <InputNumber prefix={<UserOutlined />} />
                        </Form.Item>
                    </Col >
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Form.Item
                            label="Numero de capas intermedias"
                            name="numberIntermediateLayers"
                            rules={[{ required: true, type: 'number', min: 1, max: 99999 }]}
                        >
                            <InputNumber
                                onChange={(e) => setLayerNumbers(e) }
                               prefix={<UserOutlined />}
                            />
                        </Form.Item>
                    </Col >
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Funcion de activacion"
                            name="outputActivationFunction"
                            rules={[{ required: true}]}
                        >
                            <Select>
                                {
                                    outputsActivationFunctions.map( (a) => (
                                        <Option value={a} >{a}</Option>
                                    ))
                                }

                            </Select>
                        </Form.Item>
                    </Col >
                </Row>

                {
                     layerNumbers != undefined && layerNumbers > 0 ?
                        <>
                            <h3>Configuracion capas intermedias</h3>
                            <Row gutter={24}>
                                {getFieldsNumberNeurons()}
                            </Row>
                            <Row gutter={16}>
                                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                                    <Form.Item
                                        label="Funcion de activacion"
                                        name="intermediaActivationFunction"
                                        rules={[{ required: true}]}
                                    >
                                        <Select>
                                            {
                                                intermediaActivationFunctions.map( (a) => (
                                                    <Option value={a} >{a}</Option>
                                                ))
                                            }

                                        </Select>
                                    </Form.Item>
                                </Col >
                            </Row>
                        </> : <></>
                }

                <h3>Configuracion de pesos</h3>
                <Row gutter={24}>{inputParameters ? getFields() : <></> }</Row>
                <Button
                    onClick={setRandomWeights}
                >
                    Generar Pesos
                </Button>

                <Row>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" >
                            Entrenar Red
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        </>
    );
}

export default FormConfigurationNetwork;
