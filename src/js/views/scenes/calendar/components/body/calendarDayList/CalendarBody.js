import Component from "#components/component";
import CalendarDayItem from "./CalendarDayItem";
import createElement from "#lib/createElement";
class CalendarBody extends Component {
    constructor(props) {
        super(props);
        //  new Date() = new Date();
    }

    getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    renderCalendarBody() {            
        let output = ""; 


            var lastDayOfWeek = 0;
            var currentMontDays = 1;
            var nextMonthDays = 1;
            
            var daysInMonth = this.getDaysInMonth(this.getStoreState().calendar.currentMonthIndex,  new Date().getFullYear()),
                firstDayMonth = new Date( new Date().getFullYear(), this.getStoreState().calendar.currentMonthIndex, 1),
                firstDayWeekday = firstDayMonth.getDay();

                var prev_month = this.getStoreState().calendar.currentMonthIndex == 0 ? 11 : this.getStoreState().calendar.currentMonthIndex - 1,
                    prev_year = prev_month == 11 ?  new Date().getFullYear() - 1 :  new Date().getFullYear(),
                    previousMonthDays = this.getDaysInMonth(prev_month, prev_year);

            for (let i = 1; i < 36; i++) {

                // Row
                if (lastDayOfWeek == 0) {
                    output += "<div class=\"cal__cell-row\">";
                }    

                if(i < new Date( new Date().getFullYear(), this.getStoreState().calendar.currentMonthIndex, 1).getDay()) {
                let ol =  (previousMonthDays - firstDayWeekday + i + 1)
                    output +=   `${createElement(new CalendarDayItem({currentCalendarDate:  new Date(), dayNumber: ol,otherMonth: true})).outerHTML} `

                } else if(currentMontDays > daysInMonth) {

                    output +=   `${createElement(new CalendarDayItem({currentCalendarDate:  new Date(), dayNumber: nextMonthDays, otherMonth: true  })).outerHTML} `
                    nextMonthDays++;

                } else {
                    output +=   `${createElement(new CalendarDayItem({currentCalendarDate:  new Date(), dayNumber: currentMontDays })).outerHTML} `
                    currentMontDays++;
                }

                // Row
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
            ${this.renderCalendarBody()};
        `;
    }
}

export default CalendarBody;