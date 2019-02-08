import Component from "#components/component";
import calendarHeader from "./components/header";
import calendarBody from "./components/body";


class Calendar extends Component {
    constructor(props) {
        super(props);
        // this.currentDate = new Date();
    }

    // Pass in the Month and Days

    render() {
        this.setChild("calendar-header", calendarHeader);
        this.setChild("calendar-body", calendarBody);
        return /*html*/`
            <div data-js="scene-element" class="scene">

                <header data-child="calendar-header" class="cal__header"></header>
                <section data-child="calendar-body" class="cal__month"></section>

            </div>
        `;
    }
}

export default Calendar;