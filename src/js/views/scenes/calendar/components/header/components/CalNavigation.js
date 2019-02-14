import Component from "#components/component";
import { NEXT_CALENDAR_MONTH, PREV_CALENDAR_MONTH } from "./../../../calendarEvents";
import { 
    SetPrevMonth, 
    SetNextMonth 
} from "./../../../calendarActions";

class CalNavigation extends Component {
    constructor(props) {
        super(props);
        this.date = new Date();
        this.currentMonth = this.monthAsName(this.date.getMonth());
        this.currentYear = this.date.getFullYear();
        this.onEvent = this.onEvent.bind(this);
    }

    monthAsName(monthIndex) {
        return [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ][monthIndex]
    }

    

    onCreated() {
        this.refs.currentMonth.textContent = this.monthAsName(this.getStoreState().calendar.currentMonthIndex) + " " + this.currentYear;
    }

    /*
    * handling actions/reducer
    */
    onEvent(state, action) {
    }

    nextCalendarMonth(event) {
        this.dispatch(SetNextMonth(1))
        this.refs.currentMonth.textContent = this.monthAsName(this.getStoreState().calendar.currentMonthIndex) + " " + this.currentYear;
    }

    prevCalendarMonth(event) {
        this.dispatch(SetPrevMonth(1))
        this.refs.currentMonth.textContent = this.monthAsName(this.getStoreState().calendar.currentMonthIndex) + " " + this.currentYear;
    }
     
    render() {
        console.log()
        return /*html*/`
            <div class="cal__header-bottom">
                <button onClick="calnavigation.prevCalendarMonth(event);" class="cal__pagination-arrow"><i class="fas fa-angle-left"></i></button>
                <span class="cal__current-month" data-ref="currentMonth"> </span>
                <button onClick="calnavigation.nextCalendarMonth(event)" class="cal__pagination-arrow"><i class="fas fa-angle-right"></i></button>
            </div>
        `;
    }
}

export default CalNavigation;        

