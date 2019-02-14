import { 
    CURRENT_CALENDAR_MONTH,
    NEXT_CALENDAR_MONTH,
    PREV_CALENDAR_MONTH
} from "./calendarEvents";

export default (state, action) => {
   
    switch (action.type) {
        case CURRENT_CALENDAR_MONTH: {
            var currentMonth = state.calendar.currentMonthIndex + 9999;
            return currentMonth;
        }

        case NEXT_CALENDAR_MONTH: {
            var nextMonth =  state.currentMonthIndex + action.value;
            return Object.assign({}, state, {  currentMonthIndex: nextMonth });
        }

        case PREV_CALENDAR_MONTH: {
            var prevMonth =  state.currentMonthIndex - action.value;
            return Object.assign({}, state, { currentMonthIndex: prevMonth });
        }

        default:
            return state;
    }
}