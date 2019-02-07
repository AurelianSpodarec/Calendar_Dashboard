// import Component from "#components/component";
import Calendar from "../Calendar";
 
class CalendarHeader extends Calendar {
    constructor(props) {
        super(props);
    }

    prevMonthBtn(event) {
        console.log('yes')
    }

    nextMonthBtn(event) {
        console.log('s')
    }
 
    getCurrentDay() {       
        return date.getDay();
    }

    getCurrentMonth() {
        
        let months = ["January", "February", "March", "April",
                    "May", "June", "July", "August", "September", 
                    "October", "November", "December"];
        var currentMonth = months[this.date.getMonth()]
        return currentMonth;
    }

    getCurrentYear() {
        
        let currentYear = this.date.getFullYear();
        return currentYear;
    }

    headerMonth() {
        return /*html*/`
            ${this.getCurrentMonth() + " " + this.getCurrentYear()}
        `;
    }

    render() {
        console.log(this.children);
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
                <button onClick="calendarHeader.prevMonthBtn(event)" class="cal__pagination-arrow"><i class="fas fa-angle-left"></i></button>
                <span class="cal__current-month">${this.headerMonth()}</span>
                <button onClick="calendarHeader.nextMonthBtn(event)" class="cal__pagination-arrow"><i class="fas fa-angle-right"></i></button>
            </div>


        </div>
        </header>
        `;
    }
}

export default CalendarHeader;