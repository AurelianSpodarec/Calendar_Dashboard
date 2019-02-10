import Component from "#components/component";
import Day from "../body/day/Day";
import createElement from "#lib/createElement";

class Row extends Component {
    constructor(props) {
        super(props);
    }

    renderDays() {            
        let html; 
        let days = 31;
        var w = 0;
        var element = createElement(new Day);
    
        for (let i = 1; i < days; i++) {
            if (w == 0) {
                html += '<div class="cal__cell-row">';
            }    
            
                // html += `
                // <div class="cal__cell cal__cell-day">
                //     <div class="cal__cell-top">
                //         <span class="cal__day-number">${i}</span>
                //     </div>  
                // </div>  
                // `;  

                html += '`${ element }`'
                

            if (w == 6) {
                html += '</div>';
                w = 0;
            } else {
                w++;
            }
        }

        return html;
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
