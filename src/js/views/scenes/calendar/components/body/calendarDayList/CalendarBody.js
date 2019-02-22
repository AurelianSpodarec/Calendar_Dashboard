import Component from "#components/component";
import CalendarDayItem from "./CalendarDayItem";
import createElement from "#lib/createElement";
class CalendarBody extends Component {
    constructor(props) {
        super(props);
        this.currentYear = this.getStoreState().calendar.currentYear;
        this.currentMonth = this.getStoreState().calendar.currentMonthIndex;
    }

    getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
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