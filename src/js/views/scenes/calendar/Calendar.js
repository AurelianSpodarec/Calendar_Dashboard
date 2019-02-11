import Component from "#components/component";
import CalendarHeader from "./components/header";
import CalendarBody from "./components/body";


class Calendar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.setChild("calendar-header", new CalendarHeader());
        this.setChild("calendar-body", new CalendarBody());
        return /*html*/`
            <div data-js="scene-element" class="scene">

                <header data-child="calendar-header" class="cal__header"></header>
                <section data-child="calendar-body" class="cal__month"></section>

            </div>
        `;
    }
}

export default Calendar;