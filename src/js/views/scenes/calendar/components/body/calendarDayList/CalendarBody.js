import Component from "#components/component";
import CalendarDayItem from "./CalendarDayItem";
import createElement from "#lib/createElement";
import calendarJSON from "#json/calendarJSON";

class CalendarBody extends Component {
    constructor(props) {
        super(props);
        this.currentYear = this.getStoreState().calendar.currentYear;
        this.currentMonth = this.getStoreState().calendar.currentMonthIndex;
    }

    getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    renderDayEvents() {
        return /*html*/`
            <div class="cal__dayEvents">

                <div class="cal__dayEvent">
                    <span class="cal__dayEvent-color"></span>

                    <div class="cal__dayEvent-title">
                        <span>Karate TOurnament</span>
                    </div>

                    <div class="cal__dayEvent-actions">
                        <button class="cal__dayEvent-action btn--clean"><i class="cal__dayEvent-actionSvg far fa-edit"></i></button>
                        <button class="cal__dayEvent-action btn--clean"><i class="cal__dayEvent-actionSvg far fa-trash-alt"></i></button>
                    </div>
                </div>

            </div>
        `;
    }

    renderDayCells() {

    }

    renderCalendarBody() {            
        let output = ""; 


            var lastDayOfWeek = 0;
            var currentMontDays = 1;
            var nextMonthDays = 1;
            
            var daysInMonth = this.getDaysInMonth(this.currentMonth,  this.currentYear),
                firstDayMonth = new Date( this.currentYear, this.currentMonth, 1),
                firstDayWeekday = firstDayMonth.getDay();

                var prev_month = this.currentMonth == 0 ? 11 : this.currentMonth - 1,
                    prev_year = prev_month == 11 ?  this.currentYear - 1 :  this.currentYear,
                    previousMonthDays = this.getDaysInMonth(prev_month, prev_year);

            for (let i = 1; i < 36; i++) {

                if (lastDayOfWeek == 0) {
                    output += "<div class=\"cal__cell-row\">";
                }    

                    if(i < new Date( this.currentYear, this.currentMonth, 1).getDay()) {
                        let day =  (previousMonthDays - firstDayWeekday + i + 1)
                        output +=   `${createElement(new CalendarDayItem({ day, prevMonth: true, otherMonth: true})).outerHTML} `
                    } else if(currentMontDays > daysInMonth) {
                        output +=   `${createElement(new CalendarDayItem({ day:  nextMonthDays, nextMonth: true, otherMonth: true  })).outerHTML} `
                        nextMonthDays++;
                    } else {
                        output +=   `${createElement(new CalendarDayItem({ day: currentMontDays })).outerHTML} `
                        currentMontDays++;
                    }
                   
                if (lastDayOfWeek == 6) {
                    output += "</div>";
                    output += this.renderDayEvents();
                    lastDayOfWeek = 0;
                } else {
                    lastDayOfWeek++;
                }
            }


        return output;
    }

    render() {
        return /*html*/`
        <div> 
            ${this.renderCalendarBody()}
        </div>
        `;
    }
}

export default CalendarBody;