import React from 'react'
import { Layout } from "antd";
import  "../css/footer.css";

const { Footer } = Layout;

const BaseFooterComponent = () => {
    return (
        <Footer className = "base-footer">
            © 2021-2021 Prueba Tecnica - Diego Villa. IT Globals
        </Footer>
    );
}
export default BaseFooterComponent;
