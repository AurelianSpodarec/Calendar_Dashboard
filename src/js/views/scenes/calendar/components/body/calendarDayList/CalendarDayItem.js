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
        
        // let jsonData = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + days;
        const dayData =  this.getDayEvents(this.currentYear, this.currentMonth, days)

         
        console.log(dayData)
        // console.log(dayData)
        // console.log("Cell data " + cellData)
        // console.log(timestamp)
        // console.log(timestampISO)
        // console.log(jsonData)
        
        // if(timestampISO === jsonData.toISOString().substring(0, 10)) { // 2019-01-28
        //     console.log("Matches");
        //     console.log(calendarData[2019][1][24])
        // } else {
        //     console.log("Doesn't match");
        // }
    
        // const cellData = {
        //     year: timestampISO.split("-"),
        //     month: timestampISO.split("-"),
        //     day:  timestampISO.split("-"),
        // }
        

        // if(jsonData) { // Timestamp =  Sun Feb 24 2019
        //     console.log("Matches");
        //     console.log(calendarData[2019][1][24])
        // } else {
        //     console.log("Doesn't match");
        // }


        return /*html*/`
            <div data-ref="cellDay" onclick="CalendarDaysList.selectActive(this)" class="cal__cell cal__cell-day ${isToday} ${otherMonth}" 
                date-timestamp="${timestampISO}" >
                <div class="cal__cell-top">
                    <span class="cal__event-day-count">3</span>
                    <span class="cal__day-number">${days}</span>
                </div>
                <div class="cal__cell-bottom">
                    <div class="cal__event-dot" title="Karate Tournament"></div>
                    <div class="cal__event-dot" title="Karate Tournament"></div>
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