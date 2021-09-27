import React, {useEffect} from "react";
import Header from "./components/header/HeaderComponent";
import Footer from "./components/footer/FooterComponent";
import Menu from "./components/nav-menu/MenuComponent";
import {useDispatch} from "react-redux";
import {fetchAllMenuItems} from "../../state/actions-reducers/menu/menuAction";
import Routes from "../../route";
import Layout from "antd/es/layout/layout";
import WelcomeMessageComponent from "./components/welcome-message-component/WelcomeMessageComponent";
const { Content } = Layout;

const LayoutComponent = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllMenuItems())
    }, [dispatch]);

    return (
        <>
            <Header menu={<Menu />} />
            <Content>
            <Routes />
            </Content>
            <Footer />
        </>

    );
}

export default LayoutComponent;
