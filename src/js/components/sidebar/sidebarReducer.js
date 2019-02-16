import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE
} from "./sidebarEvents";

export default (state, action) => {
    switch(action.type) {
        case SIDEBAR_OPEN:
            return Object.assign({}, state, { isSidebarToggled: true })
        case SIDEBAR_CLOSE:
            return Object.assign({}, state, { isSidebarToggled: false })
        default:
            return state;
    }
}