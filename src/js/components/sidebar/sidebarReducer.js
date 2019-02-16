import { 
    SET_SELECTED_PAGE, 
    IS_SIDEBAR_OPEN,
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE
} from "./sidebarEvents";

export default (state, action) => {
    switch(action.type) {
        case SET_SELECTED_PAGE:
            console.log(action);
        case IS_SIDEBAR_OPEN:
            console.log(state.sidebar)
        case SIDEBAR_OPEN:
            return Object.assign({}, state, {isSidebarOpen: true})
        case SIDEBAR_CLOSE:
            return Object.assign({}, state, {isSidebarOpen: false})
        default:
            return state;
    }
}