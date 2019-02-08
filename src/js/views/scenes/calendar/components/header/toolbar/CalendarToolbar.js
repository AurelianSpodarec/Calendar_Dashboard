import Component from "#components/component";

class CalendarToolbar extends Component {
    constructor(props) {
        super(props);
    }

   setCurrentDate() {
       // Get Set the current day in the header and body
   }

    render() {
        return /*html*/`
            <div class="cal__toolbar"> 
                <button class="cal__tool-btn">
                    <i class="cal__tool-icon fas fa-search" arial-label="Search Calendar" title="Search Calendar"></i>
                </button>
                <button onClick="calendarToolbar.setCurrentDay()" class="cal__tool-btn">
                    <i class="cal__tool-icon fas fa-cal-day" arial-label="Go to current date" title="Today"></i>
                </button>
                <button class="cal__tool-btn">
                    <i class="cal__tool-icon far fa-calendar-alt" arial-label="Month" title="Month"></i>
                </button>
            </div>
        `;
    }
}

export default CalendarToolbar;