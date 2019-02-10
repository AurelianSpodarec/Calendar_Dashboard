import Component from "#components/component";

class Day extends Component {
    constructor(props) {
        super(props);
        this.date = new Date();
    }

    // On click, get selected day

    // On button click + in the header, display a row and set events, then display a circle here

    // Take in is-today
    
    render() {
        // id mathes with todays day
        let currentDate = this.date.getDate();
        let days = this.props.dayNumber;
        let today = (currentDate === this.props.dayNumber) ? "is-today" : " ";

        console.log(this.date.getDate())
        return /*html*/`
            <div data-day-id="${this.props.dayNumber}" class="cal__cell cal__cell-day ${today}">
                <div class="cal__cell-top">
                    <span class="cal__day-number">${days}</span>
                </div>
            </div> 
        `;
    }
}

export default Day;                
                
                
                
                    
               