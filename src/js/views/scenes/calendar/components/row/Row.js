import Component from "#components/component";
import createElement from "#lib/createElement";
import Day from "../body/day/day";

class Row extends Component {
    constructor(props) {
        super(props);
        this.date = new Date();
    }

    renderDays() {            
        let output = ""; 
        let days = 31;
        var lastDayOfWeek = 0;
        
        
        // If todayDay = i, put class active

        for (let i = 1; i < days; i++) {
            if (lastDayOfWeek == 0) {
                output += "<div class=\"cal__cell-row\">";
            }    

            if(this.date === i) {
                output +=   `${createElement(new Day({dayNumber: i, active: true })).outerHTML} `
            } else {
                output +=   `${createElement(new Day({dayNumber: i })).outerHTML} `
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
            <section class="cal__month-screen"> 
                ${this.renderDays()}
            </section>
        `;
    }
}

export default Row;
