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
            console.log(state)
            var nextMonth =  state.currentMonthIndex + action.value;
            console.log(state)
            console.log(nextMonth);
            
            return Object.assign({}, state, {  currentMonthIndex: nextMonth });
        }

        case PREV_CALENDAR_MONTH: {
            console.log(state)
            var prevMonth =  state.currentMonthIndex - action.value;
            console.log(state)
            console.log(prevMonth);
             
            return Object.assign({}, state, { currentMonthIndex: prevMonth });
        }

        default:
            return state;
    }
}