import { 
    CURRENT_CALENDAR_MONTH,
    NEXT_CALENDAR_MONTH,
    PREV_CALENDAR_MONTH
} from "./calendarEvents";

export default (state, action) => {

    switch (action.type) {

        // case SET_CURRENT_DATE: {
        //     return 1;
        // }

        case CURRENT_CALENDAR_MONTH: {
            
            return 1;
        }

        case NEXT_CALENDAR_MONTH: {
            let currentMonthIndex =  state.currentMonthIndex + action.value;

            if(state.currentMonthIndex >= 11) {
                currentMonthIndex = 0;
            }
            return Object.assign({}, state, {  currentMonthIndex });
        }

        case PREV_CALENDAR_MONTH: {
            let currentMonthIndex =  state.currentMonthIndex - action.value;

            if(state.currentMonthIndex <= 0) {
                currentMonthIndex = 11;
            }
            return Object.assign({}, state, { currentMonthIndex });
        }

        default:
            return state;
    }
}

// Change the year
// If the index month is to go 12, currentYear +1
// If the index month is to go 0, add currentYear -1