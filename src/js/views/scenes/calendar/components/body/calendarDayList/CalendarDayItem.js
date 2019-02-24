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

    getDayEvents(year, month, day) {
        const eventYear = calendarJSON[year];
        if (eventYear !== undefined) {
            const eventMonth = eventYear[month];
      
            if (eventMonth !== undefined) {
                const eventDay = eventMonth[day];

               if (eventDay !== undefined)
                 return eventDay.events;
            }
        }
    }
    
    getDayEventsLenght(dayEvents) {
        if (dayEvents === undefined) {
            return 0;
        }
        return dayEvents.length;
    }

    renderEventDot(dayEvents) {
        
        if (dayEvents === undefined) {
            return 0;
        }

        return dayEvents.map(function(event){
            return `<div class="cal__event-dot" title="${event.title}"></div>`
        }).join("")
    }

    renderDayCell() {
        let days = this.props.day;

        let curMonth;
        if(this.props.prevMonth) {
            curMonth = this.currentMonth - 1;
        } else if (this.props.nextMonth) {
            curMonth = this.currentMonth + 1;
        } else {
            curMonth = this.currentMonth;
        }


        let date = new Date( this.currentYear, curMonth, days);
        let timestamp = date.toDateString();
        let timestampISO = date.toISOString().substring(0, 10);

        let isToday = timestampISO === new Date().toISOString().substring(0, 10) ? "is-today" : "";
        let otherMonth = this.props.otherMonth ? "is-other-month" : "";
        
        const dayData =  this.getDayEvents(this.currentYear, curMonth, days)
        const eventCount = this.getDayEventsLenght(dayData) ? `<span class="cal__event-day-count">${this.getDayEventsLenght(dayData)}</span>` : "" ;
 

        return /*html*/`
            <div data-ref="cellDay" onclick="CalendarDaysList.selectActive(this)" class="cal__cell cal__cell-day ${isToday} ${otherMonth}" 
                date-timestamp="${timestampISO}" >
                <div class="cal__cell-top">
                    ${eventCount}
                    <span class="cal__day-number">${days}</span>
                </div>
                <div  class="cal__cell-bottom">
                    ${this.renderEventDot(dayData)}
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