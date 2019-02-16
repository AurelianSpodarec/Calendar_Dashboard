import { 
    SET_SELECTED_PAGE, 
    IS_SIDEBAR_TOGGLE, 
    SIDEBAR_OPEN, 
    SIDEBAR_CLOSE 
} from "./sidebarEvents";

const SetSelectedPage = function(value) {
    return {
        type: SET_SELECTED_PAGE,
        value: 1,
    };
};

const isSidebarToggle = function(value) {
    return {
        type: IS_SIDEBAR_TOGGLE,
        value: true,
    };
};

const setSidebarOpen = function() {
    return {
        type: SIDEBAR_OPEN,
        value: true,
    };
}

const setSidebarClose = function() {
    return {
        type: SIDEBAR_CLOSE,
        value: false,
    };
}

export {
    SetSelectedPage,
    isSidebarToggle,
    setSidebarOpen,
    setSidebarClose
}