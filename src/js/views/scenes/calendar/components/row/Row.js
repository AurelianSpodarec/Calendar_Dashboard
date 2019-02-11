import Component from "#components/component";
import createElement from "#lib/createElement";
import Day from "../body/day/day";

class Row extends Component {
    constructor(props) {
        super(props);
        this.date = new Date();
    }

    getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }
 
    


    renderDays() {            
        let output = ""; 


            var lastDayOfWeek = 0;
            var currentMontDays = 1;
            var nextMonthDays = 1;
            
            var daysInMonth = this.getDaysInMonth(this.date.getMonth(), this.date.getFullYear()),
                firstDayMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1),
                firstDayWeekday = firstDayMonth.getDay();

                var prev_month = this.date.getMonth() == 0 ? 11 : this.date.getMonth() - 1,
                    prev_year = prev_month == 11 ? this.date.getFullYear() - 1 : this.date.getFullYear(),
                    previousMonthDays = this.getDaysInMonth(prev_month, prev_year);

            // var prevMonth = this.date.getMonth() == 0 ? 11 : this.date.date.getMonth() - 1;



            for (let i = 1; i < 36; i++) {

                // Row
                if (lastDayOfWeek == 0) {
                    output += "<div class=\"cal__cell-row\">";
                }    



                if(i < new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay()) {
                   let ol =  (previousMonthDays - firstDayWeekday + i + 1)
                    output +=   `${createElement(new Day({
                                dayNumber: ol,
                                otherMonth: true 
                            })).outerHTML} `

                } else if(currentMontDays > daysInMonth) {

                    output +=   `${createElement(new Day({dayNumber: nextMonthDays, otherMonth: true  })).outerHTML} `
                    nextMonthDays++;

                } else {
                    output +=   `${createElement(new Day({dayNumber: currentMontDays })).outerHTML} `
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
            <section class="cal__month-screen"> 
                ${this.renderDays()}
            </section>
        `;
    }
}

export default Row;
