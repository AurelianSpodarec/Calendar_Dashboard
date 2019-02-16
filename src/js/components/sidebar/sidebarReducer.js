import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    SIDEBAR_MOBILE_OPEN,
    SIDEBAR_MOBILE_CLOSE
} from "./sidebarEvents";

export default (state, action) => {
    switch(action.type) {
        case SIDEBAR_OPEN:
            return Object.assign({}, state, { isSidebarToggled: true })
        case SIDEBAR_CLOSE:
            return Object.assign({}, state, { isSidebarToggled: false })
        case SIDEBAR_MOBILE_OPEN:
            return Object.assign({}, state, { isSidebarMobileToggled: true })
        case SIDEBAR_MOBILE_CLOSE:
            return Object.assign({}, state, { isSidebarMobileToggled: false })
        default:
            return state;
    }
}