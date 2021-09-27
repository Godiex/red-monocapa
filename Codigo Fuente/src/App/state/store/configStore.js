import { configureStore } from '@reduxjs/toolkit';
import menu from "../actions-reducers/menu/menuReducer";

const ConfigStore = configureStore({
    reducer : {
        menu
    }
})

export default ConfigStore;
