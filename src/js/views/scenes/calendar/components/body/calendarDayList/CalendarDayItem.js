import Component from "#components/component";


class CalendarDayItem extends Component {
    constructor(props) {
        super(props);
    }

    onEvent(event) {
        event.preventDefault();
        console.log(this.refs.calCel)
    }

    render() {
        let days = this.props.dayNumber;

        let otherMonth = this.props.otherMonth ? "is-other-month" : "";
        let today = (this.props.currentCalendarDate.getDate() === days) ? "is-today" : "";

        return /*html*/`
            <div class="cal__cell cal__cell-day ${today} ${otherMonth}">
                <div class="cal__cell-top">
                    <span class="cal__day-number">${days}</span>
                </div>
            </div> 
        `;
    }
}

export default CalendarDayItem;