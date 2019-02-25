import Component from "#components/component";
import createElement from "#lib/createElement";
import CalendarDayEvents from "./CalendarDayEvents";
import CalendarDayItem from "./CalendarDayItem";
import calendarData from "#json/calendarData";
import { 
    NEXT_CALENDAR_MONTH,
    PREV_CALENDAR_MONTH,
    SET_CURRENT_DATE
 } from "./../../../calendarEvents";

class CalendarDaysList extends Component {
    constructor(props) {
        super(props)
        this.onEvent = this.onEvent.bind(this);
        this.setSubscriber("CalendarDaysList", this.onEvent);
        this.currentYear = this.getStoreState().calendar.currentYear;
        this.currentMonth = this.getStoreState().calendar.currentMonthIndex;
        console.log("sddds", this.currentMonth)
    }

    removeSelectedCell() {
        Array.from(this.refs.monthScreen.querySelectorAll('[data-ref=cellDay]')).forEach(ref => {
            ref.classList.remove("is-selected");         
        });
    }

    getDayEvents(year, month, day) {
        const eventYear = this.calendarData[year];
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


    selectActive(element) {
        this.removeSelectedCell();
        element.classList.add('is-selected')
        let cellRowWrap = element.parentNode.parentNode;
        const timestamp = element.getAttribute('date-timestamp');

        var el = document.getElementsByClassName('cal__dayEvents')[0];

        if(el) {
            el.remove();
        }
        
        let calendarDayEvents = createElement(new CalendarDayEvents({calendarData}))
        let apend = cellRowWrap.appendChild(calendarDayEvents);
        apend.style.height = '';
        apend.classList.add('is-visible')
    }

    editDayEvent() {
        alert("Edit Event");
    }

    deleteDayEvent() {
        alert("Delete Event");
    }

    getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    renderCalendarBody() {            
        let output = ""; 

            let lastDayOfWeek = 0;
            let currentMonthDays = 1;
            let nextMonthDays = 1;
           
            let daysInMonth = this.getDaysInMonth(this.currentMonth,  this.currentYear),
                firstDayMonth = new Date( this.currentYear, this.currentMonth, 1),
                firstDayWeekday = firstDayMonth.getDay();

                let prev_month = this.currentMonth == 0 ? 11 : this.currentMonth - 1,
                    prev_year = prev_month == 11 ?  this.currentYear - 1 :  this.currentYear,
                    previousMonthDays = this.getDaysInMonth(prev_month, prev_year);

            for (let i = 1; i < 36; i++) {

                if (lastDayOfWeek == 0) {
                    output += '<div class="cal__cell-row-wrap">';
                    output += "<div class=\"cal__cell-row\">";
                }    

                    if(i < new Date( this.currentYear, this.currentMonth, 1).getDay()) {
                        let day =  (previousMonthDays - firstDayWeekday + i + 1)
                        let month = (this.currentMonth - 1);
                        output +=   `${createElement(new CalendarDayItem({ day, month })).outerHTML} `
                    } else if(currentMonthDays > daysInMonth) {
                        let day = nextMonthDays;
                        let month = this.currentMonth + 1;
                        output +=   `${createElement(new CalendarDayItem({ day, month })).outerHTML} `
                        nextMonthDays++;
                    } else {
                        let day = currentMonthDays;
                        let month = this.currentMonth;
                        output +=   `${createElement(new CalendarDayItem({ day, month })).outerHTML} `
                        currentMonthDays++;
                    }
                   
                if (lastDayOfWeek == 6) {
                    output += "</div>";
                    output += "</div>";
                    
                    lastDayOfWeek = 0;
                } else {
                    lastDayOfWeek++;
                }
            }

        return output;
    }

    
   
    onEvent(state, action) {
        if(action.type === NEXT_CALENDAR_MONTH) {
            this.renderMonthBody();
        }

        if(action.type === PREV_CALENDAR_MONTH) {
            this.renderMonthBody();
        }
        
        if(action.type === SET_CURRENT_DATE){
            this.renderMonthBody();
        }

    }

    renderMonthBody() {
        this.refs.monthScreen.innerHTML = "";
        this.refs.monthScreen.innerHTML = this.renderCalendarBody();
    }

    onCreated() {
        this.renderMonthBody();
    }
    
    render() {
     
        return /*html*/`
            <div data-ref="monthScreen" class="cal__month-screen"> </div>
        `;
    }
}

export default CalendarDaysList;