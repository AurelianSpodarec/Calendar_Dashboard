import Component from "#components/component";
import { SET_CURRENT_DATE } from "./../../../calendarEvents";
import { 
    SetCurrentDate
} from "./../../../calendarActions";

class CalendarToolbar extends Component {
    constructor(props) {
        super(props);
    }

   setCurrentDate() {
       // Get Set the current day in the header and body
   }

   goToCurrentDate() {
       const date = new Date();
       const currentMonth = date.getMonth();
       const currentYear = date.getFullYear();
       this.dispatch(SetCurrentDate(currentMonth, currentYear))
   }

    render() {
        return /*html*/`
            <div class="cal__toolbar"> 
                <!-- <button class="cal__tool-btn">
                    <i class="cal__tool-icon fas fa-search" arial-label="Search Calendar" title="Search Calendar"></i>
                </button> -->
                <button onClick="calendarToolbar.goToCurrentDate()" class="cal__tool-btn">
                    <i class="cal__tool-icon far fa-calendar-alt" arial-label="Go to current date" title="Today"></i>
                </button>
                <!-- <button class="cal__tool-btn">
                    <i class="cal__tool-icon far fa-calendar-alt" arial-label="Month" title="Month"></i>
                </button> -->
            </div>
        `;
    }
}

export default CalendarToolbar;