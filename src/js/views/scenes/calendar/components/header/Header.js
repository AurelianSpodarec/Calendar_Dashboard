import Component from "#components/component";

class CalendarHeader extends Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this);
        this.setSubscriber("calendar", this.onEvent);
    }

 
    onEvent(state, action) {
        
    }

    headerToolBar() {
        return /*html*/`
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
        `;
    }

    headerNavigation() {
        return /*html*/`
            <div class="cal__header-bottom">
                <button data-ref="prev-month-btn" class="cal__pagination-arrow"><i class="fas fa-angle-left"></i></button>
                <span class="cal__current-month">February 2019</span>
                <button data-ref="next-month-btn" class="cal__pagination-arrow"><i class="fas fa-angle-right"></i></button>
            </div>
        `;
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
                <button data-ref="prev-month-btn" class="cal__pagination-arrow"><i class="fas fa-angle-left"></i></button>
                <span class="cal__current-month">February 2019</span>
                <button data-ref="next-month-btn" class="cal__pagination-arrow"><i class="fas fa-angle-right"></i></button>
            </div>


        </div>
        </header>
        `;
    }
}

export default CalendarHeader;