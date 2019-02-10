import Component from "#components/component";

class Day extends Component {
    constructor(props) {
        super(props);
        this.date = new Date();
    }

    // On click, get selected day

    // On button click + in the header, display a row and set events, then display a circle here

    // Take in is-today

    onEvent(event) {
        event.preventDefault();
        console.log(this.refs.calCel)
    }
    
    render() {
        let days = this.props.dayNumber;
        let otherMonth = this.props.otherMonth ? "is-other-month" : "";
        
        
        let today = (this.date.getDate() === this.props.dayNumber) ? "is-today" : "";

 
        return /*html*/`
            <div data-ref="calCel" onClick="row" data-day-id="${this.props.dayNumber}" class="cal__cell cal__cell-day ${today} ${otherMonth}">
                <div class="cal__cell-top">
                    <span class="cal__day-number">${days}</span>
                </div>
            </div> 
        `;
    }
}

export default Day;