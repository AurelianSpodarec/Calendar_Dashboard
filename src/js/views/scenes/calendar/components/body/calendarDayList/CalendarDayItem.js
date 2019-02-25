import Component from "#components/component";
import * as model from "./model";

class CalendarDayItem extends Component {
    constructor(props) {
        super(props);
        this.currentYear = this.getStoreState().calendar.currentYear;
        this.currentMonth = this.getStoreState().calendar.currentMonthIndex;
        this.setSubscriber("CalendarDayItem", this.onEvent);
    }

    renderEventDot(dayEvents) {
        if (dayEvents === undefined) return "";

        return dayEvents.map(function(event){
            return `<div class="cal__event-dot" title="${event.title}"></div>`;
        }).join("")
    }

    renderDayCell() {

        // let this.propsdate = new Date( this.currentYear, this.props.month, days);
        let date = new Date( this.currentYear, this.props.month, this.props.day);
        let timestamp = date.toDateString();
        let timestampISO = date.toISOString().substring(0, 10);

        let isToday = timestampISO === new Date().toISOString().substring(0, 10) ? "is-today" : "";
        let otherMonth = (this.props.month !== this.currentMonth) ? "is-other-month" : "";

        const data =  model.getDayEvents(this.currentYear, this.props.month, this.props.day)
        const eventCount = model.getDayEventsLenght(data) ? `<span class="cal__event-day-count">${model.getDayEventsLenght(data)}</span>` : "" ;
        const hasEvents = model.getDayEventsLenght(data) ? "has-events" : "";
        
        return /*html*/`
            <div data-ref="cellDay" onclick="CalendarDaysList.selectActive(this)" class="cal__cell cal__cell-day ${hasEvents} ${isToday} ${otherMonth}" 
                date-timestamp=" " >
                <div class="cal__cell-top">
                    ${eventCount}
                    <span class="cal__day-number">${this.props.day}</span>
                </div>
                <div  class="cal__cell-bottom">
                    ${this.renderEventDot(data)}
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