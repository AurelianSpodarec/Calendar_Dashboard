import Component from "#components/component";
import createElement from "#lib/createElement";

class CalendarDayItem extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        let days = this.props.dayNumber;

        let otherMonth = this.props.otherMonth ? "is-other-month" : "";
        // TODO: display the correct today date
        let today = (new Date().getDate() === days) ? "is-today" : "";

        return /*html*/`
            <div class="cal__cell cal__cell-day ${today} ${otherMonth}" data-timestamp="${new Date().toDateString()}">
                <div class="cal__cell-top">
                    <span class="cal__day-number">${days}</span>
                </div>
            </div> 
        `;
    }
}

export default CalendarDayItem;