import Component from "#components/component";
import createElement from "#lib/createElement";

class CalendarDayItem extends Component {
    constructor(props) {
        super(props);
        this.currentYear = this.getStoreState().calendar.currentYear;
        this.currentMonth = this.getStoreState().calendar.currentMonthIndex;
        this.setSubscriber("CalendarDayItem", this.onEvent);
    }
  
    render() {
        let days = this.props.day;
        let otherMonth = this.props.otherMonth ? "is-other-month" : "";
        // TODO: display the correct today date with a timestamp
        let today = (new Date().getDate() === days) ? "is-today" : "";
        // new Date( new Date().getFullYear(), new Date().getMonth(), 1).getDay()
        return /*html*/`
            <div class="cal__cell cal__cell-day ${today} ${otherMonth}" 
                date-timestamp="${new Date( this.currentYear, new Date().getMonth(), days).toDateString()}"
            >
                <div class="cal__cell-top">
                    <span class="cal__day-number">${days}</span>
                </div>
            </div> 
        `;
    }
}

export default CalendarDayItem;