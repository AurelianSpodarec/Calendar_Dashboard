import Component from "#components/component";
import CalendarDayItem from "./CalendarDayItem";
import createElement from "#lib/createElement";
import * as model from "./model";

class CalendarBody extends Component {
    constructor(props) {
        super(props)
        this.currentYear = this.getStoreState().calendar.currentYear;
        this.currentMonth = this.getStoreState().calendar.currentMonthIndex;
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
                        let dayData = model.getDayEvents(this.currentYear, month, day)
                        output +=   `${createElement(new CalendarDayItem({ dayData, month, day })).outerHTML} `
                    } else if(currentMonthDays > daysInMonth) {
                        let day = nextMonthDays;
                        let month = this.currentMonth + 1;
                        let dayData = model.getDayEvents(this.currentYear, month, day)
                        output +=   `${createElement(new CalendarDayItem({ dayData, month, day })).outerHTML} `
                        nextMonthDays++;
                    } else {
                        let day = currentMonthDays;
                        let month = this.currentMonth;
                        let dayData = model.getDayEvents(this.currentYear, month, day)
                        output +=   `${createElement(new CalendarDayItem({ dayData, month, day })).outerHTML} `
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

    render() {
        return /*html*/`
        <div> 
            ${this.renderCalendarBody()}
        </div>
        `;
    }
}

export default CalendarBody;