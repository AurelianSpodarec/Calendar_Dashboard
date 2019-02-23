import Component from "#components/component";
import calendarJSON from "#json/calendarJSON";

class CalendarDayItem extends Component {
    constructor(props) {
        super(props);
        this.currentYear = this.getStoreState().calendar.currentYear;
        this.currentMonth = this.getStoreState().calendar.currentMonthIndex;
        this.setSubscriber("CalendarDayItem", this.onEvent);
    }

    //
    //  TODO:
    //  Find the current date in JSON and display the info
    //  Take the day year, find the years month
    //      - Take the day month, and loop throw the years month
    //      - Take the month, and match the timestamp with the object timestamp
    //  Display the data in the UI from the object
    //  
    //
    //

    renderDayCell() {
        // const calendarData = calendarJSON;
        // console.log(calendarData)
        let curMonth;
        if(this.props.prevMonth) {
            curMonth = this.currentMonth - 1;
        } else if (this.props.nextMonth) {
            curMonth = this.currentMonth + 1;
        } else {
            curMonth = this.currentMonth;
        }
        
        let days = this.props.day;
        let timestamp = new Date( this.currentYear, curMonth, days).toDateString();
        


        let isToday = timestamp === new Date().toDateString() ? "is-today" : "";
        let otherMonth = this.props.otherMonth ? "is-other-month" : "";

        return /*html*/`
            <div data-ref="cellDay" onclick="CalendarDaysList.selectActive(this)" class="cal__cell cal__cell-day ${isToday} ${otherMonth}" 
                date-timestamp="${timestamp}" >
                <div class="cal__cell-top">
                    <span class="cal__event-day-count">3</span>
                    <span class="cal__day-number">${days}</span>
                </div>
                <div class="cal__cell-bottom">
                    <div class="cal__event-dot" title="Karate Tournament"></div>
                </div>
            </div> 
        `;
    }

    render() {
        return /*html*/`
            ${this.renderDayCell()}
        `;
    }
}

export default CalendarDayItem;