import { 
    SIDEBAR_OPEN, 
    SIDEBAR_CLOSE,
    SIDEBAR_MOBILE_OPEN,
    SIDEBAR_MOBILE_CLOSE
} from "./sidebarEvents";

 

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

const setSidebarMobileOpen = function() {
    return {
        type: SIDEBAR_MOBILE_OPEN,
        value: true,
    };
}

const setSidebarMobileClose = function() {
    return {
        type: SIDEBAR_MOBILE_CLOSE,
        value: false,
    };
}

export {
    setSidebarOpen,
    setSidebarClose,
    setSidebarMobileOpen,
    setSidebarMobileClose
}