import Component from "#components/component";
import calendarToolbar from "./toolbar";
import navigation from "./navigation";



class CalendarHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.setChild('toolbar', calendarToolbar);
        this.setChild('navigation', navigation);
        return /*html*/`
            <header class="cal__header" style="background-image: url('https://c8.alamy.com/comp/PTB79P/vector-banner-blue-winter-background-with-ice-and-snow-PTB79P.jpg');">
            <div class="cal__header-container">


                <div class="cal__header-top">
                    <div class="cal__page-info">
                        <i class="cal__page-icon fas fa-cal-day"></i>
                        <span class="cal__page-title">Calendar</span>
                    </div>
                    <div data-child="toolbar" class="cal__toolbar"></div>
                </div>

                <div data-child="navigation" class="cal__header-bottom"></div>


            </div>
            </header>
        `;
    }
}

export default CalendarHeader;