import * as constants from '../../constants/actions';

export default function menu (state = [], action) {
    switch (action.type) {
        case constants.SET_ALL_MENU_ITEM:
            return action.payload;
        default:
            return state;
    }
}
