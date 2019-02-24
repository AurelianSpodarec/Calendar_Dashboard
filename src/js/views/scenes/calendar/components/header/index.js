import Component from "#components/component";
import CalendarToolbar from "./components/Toolbar";
import CalNavigation from "./components/CalNavigation";
import CalBannerImage from "./components/CalBannerImage";


class CalendarHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        window.calendarToolbar = new CalendarToolbar();
        window.calnavigation = new CalNavigation()

        this.setChild('toolbar', window.calendarToolbar);
        this.setChild('navigation', window.calnavigation);
        this.setChild('banner', new CalBannerImage());
        return /*html*/`
            <header class="cal__header">
            <div data-child="banner" class="cal__header-banner"></div>
            <div class="cal__header-container">

                <div class="cal__header-top">
                    <div class="cal__page-info">
                        <i class="cal__page-icon far fa-calendar-alt"></i>
                        <span class="cal__page-title">Calendar</span>
                    </div>
                    <template data-child="toolbar" class="cal__toolbar"></template>
                </div>

                <template data-child="navigation" class="cal__header-bottom"></template>
                <button class="cal__create-event"><i class="fas fa-plus"></i></button>
            </div>
            </header>
        `;
    }
}

export default CalendarHeader;