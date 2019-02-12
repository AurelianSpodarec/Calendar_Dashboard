import Component from "#components/component";
import CalendarDayItem from "./CalendarDayItem";
import createElement from "#lib/createElement";


class CalendarDaysList extends Component {
    constructor(props) {
        super(props)
    }

    getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    renderDayItem() {            
        let output = ""; 


            var lastDayOfWeek = 0;
            var currentMontDays = 1;
            var nextMonthDays = 1;
            
            var daysInMonth = this.getDaysInMonth(this.props.currentCalendarDate.getMonth(), this.props.currentCalendarDate.getFullYear()),
                firstDayMonth = new Date(this.props.currentCalendarDate.getFullYear(), this.props.currentCalendarDate.getMonth(), 1),
                firstDayWeekday = firstDayMonth.getDay();

                var prev_month = this.props.currentCalendarDate.getMonth() == 0 ? 11 : this.props.currentCalendarDate.getMonth() - 1,
                    prev_year = prev_month == 11 ? this.props.currentCalendarDate.getFullYear() - 1 : this.props.currentCalendarDate.getFullYear(),
                    previousMonthDays = this.getDaysInMonth(prev_month, prev_year);

            for (let i = 1; i < 36; i++) {

                // Row
                if (lastDayOfWeek == 0) {
                    output += "<div class=\"cal__cell-row\">";
                }    

                if(i < new Date(this.props.currentCalendarDate.getFullYear(), this.props.currentCalendarDate.getMonth(), 1).getDay()) {
                let ol =  (previousMonthDays - firstDayWeekday + i + 1)
                    output +=   `${createElement(new CalendarDayItem({currentCalendarDate: this.props.currentCalendarDate, dayNumber: ol,otherMonth: true})).outerHTML} `

                } else if(currentMontDays > daysInMonth) {

                    output +=   `${createElement(new CalendarDayItem({currentCalendarDate: this.props.currentCalendarDate, dayNumber: nextMonthDays, otherMonth: true  })).outerHTML} `
                    nextMonthDays++;

                } else {
                    output +=   `${createElement(new CalendarDayItem({currentCalendarDate: this.props.currentCalendarDate, dayNumber: currentMontDays })).outerHTML} `
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
            <div class="cal__month-screen">
                ${this.renderDayItem()}
            </div>
        `;
    }
}

export default CalendarDaysList;