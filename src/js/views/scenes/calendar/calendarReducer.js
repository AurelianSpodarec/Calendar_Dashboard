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
        }

        case NEXT_CALENDAR_MONTH: {
            console.log(action)
        }

        case PREV_CALENDAR_MONTH: {
            console.log(action)
        }

        default:
            return state;
    }
}

// Store.setReducer()