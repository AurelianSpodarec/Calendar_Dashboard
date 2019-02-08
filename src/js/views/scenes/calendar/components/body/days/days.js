import Component from "#components/component";

class Days extends Component {
    constructor(props) {
        super(props);
        
    }

    calendarDay(day) {
        
        return /*html*/`
            <div class="cal__cell-row">
                <div class="cal__cell cal__cell-day is-today">
                    <div class="cal__cell-top">
                        <span class="cal__day-number">${day}</span>
                    </div>
                </div>
            </div>
        `
    }
 
    render() {
        const days = ["1", "2", "3", "4"];
        
        return /*html*/`
            <section data-child="month-days" class="cal__month-screen">
            ${days.map( day => this.calendarDay(day))}
            </section>
        `;
    }
}

export default Days;                
                
                
                
                    
               