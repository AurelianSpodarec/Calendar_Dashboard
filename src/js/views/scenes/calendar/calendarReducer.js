import { 
    CURRENT_CALENDAR_MONTH,
    NEXT_CALENDAR_MONTH, 
    PREV_CALENDAR_MONTH 
} from "./calendarEvents";

module.exports = (state, action) => {
    switch (action.type) {
        case 'CURRENT_CALENDAR_MONTH': {

        }

        case 'NEXT_CALENDAR_MONTH': {

        }

        case 'PREV_CALENDAR_MONTH': {

        }

        default:
            return state;
    }
}