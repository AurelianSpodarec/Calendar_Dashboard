import Component from "#components/component";
import Month from "../../model/Month";
const month = new Month();

class CalendarHeader extends Component {
    constructor(props) {
        super(props);
    }

    renderLabel() {

    }

    prevMonth(event) {
        this.refs.currentMonth.textContent = month.monthAsName(month.date.getMonth() - 1);
    }

    nextMonth(event) {
        this.refs.currentMonth.textContent = month.monthAsName(month.date.getMonth() + 1);
    }
 
    renderCurrentMonth(event) {
        this.refs.currentMonth.textContent = month.monthAsName(month.date.getMonth());
    }

    onCreated() {
        this.refs.currentMonth.textContent = month.monthAsName(month.date.getMonth());
    }

    render() {
        return /*html*/`
            <header class="cal__header" style="background-image: url('https://c8.alamy.com/comp/PTB79P/vector-banner-blue-winter-background-with-ice-and-snow-PTB79P.jpg');">
            <div class="cal__header-container">


                <div class="cal__header-top">
                    <div class="cal__page-info">
                        <i class="cal__page-icon fas fa-cal-day"></i>
                        <span class="cal__page-title">Calendar</span>
                    </div>
                    <div class="cal__toolbar"> 
                        <button class="cal__tool-btn">
                            <i class="cal__tool-icon fas fa-search" arial-label="Search Calendar" title="Search Calendar"></i>
                        </button>
                        <button class="cal__tool-btn">
                            <i class="cal__tool-icon fas fa-cal-day" arial-label="Go to current date" title="Today"></i>
                        </button>
                        <button class="cal__tool-btn">
                            <i class="cal__tool-icon far fa-calendar-alt" arial-label="Month" title="Month"></i>
                        </button>
                    </div>
                </div>

                <div class="cal__header-bottom">
                    <button onClick="calendarHeader.prevMonth(event)" class="cal__pagination-arrow"><i class="fas fa-angle-left"></i></button>
                    <span class="cal__current-month" data-ref="currentMonth">February 2019</span>
                    <button onClick="calendarHeader.nextMonth(event)" class="cal__pagination-arrow"><i class="fas fa-angle-right"></i></button>
                </div>


            </div>
            </header>
        `;
    }
}

export default CalendarHeader;