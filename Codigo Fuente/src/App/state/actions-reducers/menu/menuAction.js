import * as constants from "../../constants/actions";
import menuItems from "../../../../Includes/menu.json";
import {createAction} from "@reduxjs/toolkit";

export const allMenuItem =  createAction(constants.SET_ALL_MENU_ITEM);

export const fetchAllMenuItems = () => async (dispatch) => {
    dispatch(allMenuItem(menuItems.menu));
}


