
import { 
    CURRENT_CALENDAR_MONTH,
    SET_CURRENT_DATE,
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

const SetCurrentDate = function(currentMonth, currentYear) {
    return {
        type: SET_CURRENT_DATE,
        payload: {
            currentMonth: currentMonth,
            currentYear: currentYear
        }
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

export {
    SetCurrentMonth,
    SetCurrentDate,
    SetNextMonth,
    SetPrevMonth
}