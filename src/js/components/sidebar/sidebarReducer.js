import { SET_SELECTED_PAGE } from "./sidebarEvents";

export default (state, action) => {
    switch(action.type) {
        case SET_SELECTED_PAGE:
            console.log(action);
        default:
            return state;
    }
}