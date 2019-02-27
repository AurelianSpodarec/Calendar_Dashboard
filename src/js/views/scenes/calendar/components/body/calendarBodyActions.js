import { 
    SET_SELECTED_DAY_CELL, 
    SET_DAY_EVENTS,
} from "./calendarBodyEvents";

/*
 * action creators
 
 */
const SetSelectedDayCell = function(value) {
    return {
        type: SET_SELECTED_DAY_CELL,
        value: value,
    };
};

const SetDayEvents = function(objects) {
    return {
        type: SET_DAY_EVENTS,
        value: objects,
    }
}

export {
    SetSelectedDayCell,
    SetDayEvents
}