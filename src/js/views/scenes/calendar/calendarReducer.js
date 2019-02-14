import { 
    CURRENT_CALENDAR_MONTH,
    NEXT_CALENDAR_MONTH,
    PREV_CALENDAR_MONTH
} from "./calendarEvents";

export default (state, action) => {
   
    switch (action.type) {
        case CURRENT_CALENDAR_MONTH: {
            var currentMonth = 99;
            console.log(currentMonth);
            console.log("REDUCER Current")
            return currentMonth;
        }

        case NEXT_CALENDAR_MONTH: {
            var nextMonth = 4
            console.log(nextMonth)
            
            console.log("REDUCER Next")
            return nextMonth;
        }

        case PREV_CALENDAR_MONTH: {
            var prevMonth =  2
            console.log(prevMonth)
            console.log("Reducer Prev")
            return prevMonth;
        }

        default:
            return state;
    }
}