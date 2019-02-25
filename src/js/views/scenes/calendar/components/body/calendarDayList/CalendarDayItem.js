import Component from "#components/component";

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
        let days = this.props.day;


        // Change to curr cal month
        // let date = new Date( this.currentYear, curMonth, days);
        let date = new Date( this.currentYear, this.props.month, days);
        let timestamp = date.toDateString();
        let timestampISO = date.toISOString().substring(0, 10);

        let isToday = timestampISO === new Date().toISOString().substring(0, 10) ? "is-today" : "";
        let otherMonth = (this.props.month !== this.currentMonth) ? "is-other-month" : "";
        
        // const dayData =  this.getDayEvents(this.currentYear, curMonth, days)
        // const eventCount = this.getDayEventsLenght(dayData) ? `<span class="cal__event-day-count">${this.getDayEventsLenght(dayData)}</span>` : "" ;
        // const hasEvents = this.getDayEventsLenght(dayData) ? "has-events" : "";
        // <!-- ${this.renderEventDot(dayData)} -->
        return /*html*/`
            <div data-ref="cellDay" onclick="CalendarDaysList.selectActive(this)" class="cal__cell cal__cell-day ${isToday} ${otherMonth}" 
                date-timestamp="${timestampISO}" >
                <div class="cal__cell-top">
                     
                    
                    <span class="cal__day-number">${days}</span>
                </div>
                <div  class="cal__cell-bottom">
                    
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