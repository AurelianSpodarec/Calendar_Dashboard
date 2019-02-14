import Component from "#components/component";
import { NEXT_CALENDAR_MONTH, PREV_CALENDAR_MONTH } from "./../../../calendarEvents";
import store from "#lib/store/Store";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.date = new Date();
        this.currentMonth = this.monthAsName(this.date.getMonth());
        this.currentYear = this.date.getFullYear();
    }

    renderCurrentMonth(event) {
        this.refs.currentMonth.textContent = "August 2020";
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

    nextMonth() {
        var nextMonth = this.currentMonth + 2;
        console.log(nextMonth)
    }

    onCreated() {
        
        this.refs.currentMonth.textContent = this.currentMonth + " " + this.currentYear;
    }

/*
    * handling actions/reducer
    */
    onEvent(state, action) {
        // store.dispatch({ type: 'ADD' })
    }

    nextMonth(action) {
        event.preventDefault();
        this.store.dispatch({ 
            type: 'PREV_CALENDAR_MONTH',
            value: 'works'
        })
    }

    render() {
        return /*html*/`
            <div class="cal__header-bottom">
                <button onClick="navigation.nextMonth(event);" class="cal__pagination-arrow"><i class="fas fa-angle-left"></i></button>
                <span class="cal__current-month" data-ref="currentMonth"> </span>
                <button onClick="navigation.nextMonth(event)" class="cal__pagination-arrow"><i class="fas fa-angle-right"></i></button>
            </div>
        `;
    }
}

export default Navigation;        

