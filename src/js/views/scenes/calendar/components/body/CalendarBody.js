import Component from "#components/component";
import Month from "./month";
import WeekdaysLabel from "./weekdays";

class CalendarBody extends Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        this.setChild('weekdays-label', WeekdaysLabel)
        this.setChild("month-days", Month)
        return /*html*/`
            <section class="cal__month">
            <div class="cal__month-view">

                <header data-child="weekdays-label" class="cal__week-row"></header>
                <section data-child="month-days" class="cal__month-screen"></section>

            </div>
            </section>
        `;
    }
}

export default CalendarBody;