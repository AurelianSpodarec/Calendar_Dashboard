import Component from "#components/component";
import CalendarDaysList from "./calendarDayList/CalendarDaysList"

class CalendarBody extends Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        this.setChild('monthScreen', new CalendarDaysList({currentCalendarDate: this.props.currentCalendarDate}));
        return /*html*/`
            <section class="cal__month">
            <div class="cal__month-view">

            <header class="cal__week-row">
                <span class="cal__cell-weekday cal__cell">Monday</span>
                <span class="cal__cell-weekday cal__cell">Tuesday</span>
                <span class="cal__cell-weekday cal__cell">Wedenesday</span>
                <span class="cal__cell-weekday cal__cell">Thursday</span>
                <span class="cal__cell-weekday cal__cell">Friday</span>
                <span class="cal__cell-weekday cal__cell">Saturday</span>
                <span class="cal__cell-weekday cal__cell">Sunday</span>
            </header>

            <template data-child="monthScreen" class="cal__month-screen"> </template>

            </div>
            </section>
        `;
    }
}

export default CalendarBody;