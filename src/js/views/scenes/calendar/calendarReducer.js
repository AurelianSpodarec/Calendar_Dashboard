import { 
    CURRENT_CALENDAR_MONTH,
    SET_CURRENT_DATE,
    NEXT_CALENDAR_MONTH,
    PREV_CALENDAR_MONTH
} from "./calendarEvents";

export default (state, action) => {

    switch (action.type) {

        case SET_CURRENT_DATE: {
            
            let currentMonthIndex = action.payload.currentMonth;
            let currentYear = action.payload.currentYear;
            
            return Object.assign({}, state, {  currentMonthIndex, currentYear });
        }

        case CURRENT_CALENDAR_MONTH: {
            
            return 1;
        }

        case NEXT_CALENDAR_MONTH: {
            let currentMonthIndex =  state.currentMonthIndex + action.value;
            let currentYear = state.currentYear;

            if(state.currentMonthIndex === 11) {
                currentMonthIndex = 0;
                currentYear++;
            }

            return Object.assign({}, state, {  currentMonthIndex, currentYear });
        }

        case PREV_CALENDAR_MONTH: {
            let currentMonthIndex =  state.currentMonthIndex - action.value;
            let currentYear = state.currentYear;

            if(state.currentMonthIndex === 0) {
                currentMonthIndex = 11;
                currentYear--;
            }

            return Object.assign({}, state, { currentMonthIndex, currentYear });
        }

        default:
            return state;
    }
}

// Change the year
// If the index month is to go 12, currentYear +1
// If the index month is to go 0, add currentYear -1