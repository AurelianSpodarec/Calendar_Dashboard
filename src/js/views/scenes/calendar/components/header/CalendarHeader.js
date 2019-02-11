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
            <header class="cal__header">
            <div class="cal__header-banner" style="background-image: url('https://c8.alamy.com/comp/PTB79P/vector-banner-blue-winter-background-with-ice-and-snow-PTB79P.jpg');"></div>
            <div class="cal__header-container">

                <div class="cal__header-top">
                    <div class="cal__page-info">
                        <i class="cal__page-icon fas fa-cal-day"></i>
                        <span class="cal__page-title">Calendar</span>
                    </div>
                    <template data-child="toolbar" class="cal__toolbar"></template>
                </div>

                <template data-child="navigation" class="cal__header-bottom"></template>

            </div>
            </header>
        `;
    }
}

export default CalendarHeader;