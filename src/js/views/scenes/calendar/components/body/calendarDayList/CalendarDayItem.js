import Component from "#components/component";
import * as model from "./model";

class CalendarDayItem extends Component {
    constructor(props) {
        super(props);
        this.currentYear = this.getStoreState().calendar.currentYear;
        this.currentMonth = this.getStoreState().calendar.currentMonthIndex;
        this.setSubscriber("CalendarDayItem", this.onEvent);
    }

    renderEventDot(dayEventsData) {
        if (dayEventsData === undefined) return "";

        return dayEventsData.map(function(event){
            return `<div class="cal__event-dot" title="${event.title}"></div>`;
        }).join("")
    }

    renderInnerDay() {
        const eventCount = model.getDayEventsLenght(this.props.dayData) ? `<span class="cal__event-day-count">${model.getDayEventsLenght(this.props.dayData)}</span>` : "" ;
        return /*html*/`
            <div class="cal__cell-top">
                ${eventCount}
                <span class="cal__day-number">${this.props.day}</span>
            </div>
            <div  class="cal__cell-bottom">
                ${this.renderEventDot(this.props.dayData)}
            </div>
        `;
    }

    render() {
        let date = new Date( this.currentYear, this.props.month, this.props.day);
        let timestampISO = date.toISOString().substring(0, 10);

        let hasEvents = model.getDayEventsLenght(this.props.dayData) ? "has-events" : "";
        let isToday = timestampISO === new Date().toISOString().substring(0, 10) ? "is-today" : "";
        let otherMonth = (this.props.month !== this.currentMonth) ? "is-other-month" : "";

        return /*html*/`
        <div data-ref="cellDay" onclick="CalendarDaysList.selectActive(this)" class="cal__cell cal__cell-day ${hasEvents} ${isToday} ${otherMonth}" date-timestamp="${timestampISO}" >
            ${this.renderInnerDay()}
        </div> 
        `;
    }
}

export default CalendarDayItem;