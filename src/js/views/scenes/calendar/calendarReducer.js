import { 
    CURRENT_CALENDAR_MONTH,
    NEXT_CALENDAR_MONTH, 
    PREV_CALENDAR_MONTH 
} from "./calendarEvents";
import Store from "../../../lib/store/Store";

export default (state, action) => {
    switch (action.type) {
        case CURRENT_CALENDAR_MONTH: {
            
            console.log(action)
            console.log("REDUCER")
        }

        case NEXT_CALENDAR_MONTH: {
            nextMonth = currentMonthIndex + 1
            console.log(nextMonth)
            return nextMonth;
            console.log(action)
            console.log("REDUCER")
        }

        case PREV_CALENDAR_MONTH: {
            console.log(action)
            console.log("REDUCER")
        }

        default:
            return state;
    }
}