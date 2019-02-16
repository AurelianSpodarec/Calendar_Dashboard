import Component from "#components/component";
import { NEXT_CALENDAR_MONTH, PREV_CALENDAR_MONTH, SET_CURRENT_DATE } from "./../../../calendarEvents";
import { 
    SetPrevMonth, 
    SetNextMonth 
} from "./../../../calendarActions";

class CalNavigation extends Component {
    constructor(props) {
        super(props);
        this.currentMonth = this.monthAsName(this.getStoreState().calendar.currentMonthIndex);
        this.currentYear = this.getStoreState().calendar.currentYear;
        this.onEvent = this.onEvent.bind(this);
        // this.nextMonthKey = this.nextMonthKey.bind(this)
        this.setSubscriber("CalNavigation", this.onEvent);
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
    /*
    * handling actions/reducer
    */
    onEvent(state, action) {
        if(action.type === NEXT_CALENDAR_MONTH) {
            this.refs.currentMonth.textContent = this.monthAsName(this.getStoreState().calendar.currentMonthIndex) + " " + this.getStoreState().calendar.currentYear;
        }

        if(action.type === PREV_CALENDAR_MONTH) {
            this.refs.currentMonth.textContent = this.monthAsName(this.getStoreState().calendar.currentMonthIndex) + " " + this.getStoreState().calendar.currentYear;
        }

        if(action.type === SET_CURRENT_DATE) {
            this.refs.currentMonth.textContent = this.monthAsName(this.getStoreState().calendar.currentMonthIndex) + " " + this.getStoreState().calendar.currentYear;
        }
    }

    nextCalendarMonth(event) {
        this.dispatch(SetNextMonth(1))
        // this.refs.currentMonth.textContent = this.monthAsName(this.getStoreState().calendar.currentMonthIndex) + " " + this.currentYear;
    }
    
    prevCalendarMonth(event) {
        console.log(this.getStoreState().sidebar)
        this.dispatch(SetPrevMonth(1))
        // this.refs.currentMonth.textContent = this.monthAsName(this.getStoreState().calendar.currentMonthIndex) + " " + this.currentYear;
    }

    onCreated() {
        this.refs.currentMonth.textContent = this.monthAsName(this.getStoreState().calendar.currentMonthIndex) + " " + this.getStoreState().calendar.currentYear;
    }

    render() {
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

