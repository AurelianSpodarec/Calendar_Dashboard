
import { 
    SET_SELECTED_DAY_CELL,
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

export {
    SetSelectedDayCell
}