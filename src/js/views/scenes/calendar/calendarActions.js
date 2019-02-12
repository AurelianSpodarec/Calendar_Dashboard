
import { 
    CURRENT_CALENDAR_MONTH,
    NEXT_CALENDAR_MONTH, 
    PREV_CALENDAR_MONTH
} from "./calendarEvents";

/*
 * action creators
 
 */
const SetCurrentMonth = function(value) {
    return {
        type: CURRENT_CALENDAR_MONTH,
        value: value,
    };
};

const SetNextMonth = function(value) {
    return {
        type: NEXT_CALENDAR_MONTH,
        value: value
    };
};

const SetPrevMonth = function(value) {
    return {
        type: PREV_CALENDAR_MONTH,
        value: value
    };
};

export default {
    SetCurrentMonth,
    SetNextMonth,
    SetPrevMonth
}