import Component from "#components/component";
import { NEXT_CALENDAR_MONTH, PREV_CALENDAR_MONTH } from "./../../../calendarEvents";
import store from "#lib/store";

// import { SetPrevMonth } from "./../../../calendarActions";
// // import calendarReducer from "./../../../calendarReducer";
// import initState from "./../../../initState";
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
        this.refs.currentMonth.textContent = this.currentMonth + " " + this.currentYear;
    }

    /*
    * handling actions/reducer
    */
    onEvent(state, action) {
        // event.preventDefault();
        // console.log("navigation onEvent")
        // console.log(this.state)
        // this.dispatch({ 
        //     type: 'PREV_CALENDAR_MONTH',
        //     value: 'works'
        // })
    }

    nextCalendarMonth(event) {
        console.log(this.getStoreState())
        this.dispatch({
            type: NEXT_CALENDAR_MONTH,
            value: 99999999999
        })
    }

    prevCalendarMonth(event) {
        // console.log(this) 
        // console.log(this.getStoreState().calendar.currentMonthIndex);
        console.log(this.getStoreState())
        this.dispatch({
            type: PREV_CALENDAR_MONTH,
            value: 13
        })
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

