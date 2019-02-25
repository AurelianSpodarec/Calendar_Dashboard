import Component from "#components/component";

class CalendarDaysList extends Component {
    constructor(props) {
        super(props)
        this.onEvent = this.onEvent.bind(this);
        this.calendarData = this.props.calendarData;
    }

    onEvent(state, action) {
        // Update Data
    }

    //
    //  TODO:
    //
    //  If day has events
    //      - On click show the events in a row
    //
    //  If day has no events
    //      - On click do nothing
    //
    //
    //

    

    showDayEvents(element) {
        // elem.style.display = 'block';
        // var height = elem.scrollHeight + 'px';
        // elem.style.display = '';
        
        // var height = getHeight();
        // elem.classList.add('is-visible'); // Make the element visible
	    // elem.style.height = height;
    }

    closeDayEvents(element) {

    }

    toggleDayEvent(element) {

    }

    render() {
        let title = "Karate Tournament";
        return /*html*/`
            <div class="cal__dayEvents">

                <div class="cal__dayEvent">
                    <span class="cal__dayEvent-color"></span>

                    <div class="cal__dayEvent-title">
                        <span>${title}</span>
                    </div>

                    <div class="cal__dayEvent-actions">
                        <button onclick="{CalendarDaysList.editDayEvent()}" class="cal__dayEvent-action btn--clean">
                            <i class="cal__dayEvent-actionSvg far fa-edit"></i>
                        </button>
                        <button onclick="{CalendarDaysList.deleteDayEvent()}" class="cal__dayEvent-action btn--clean">
                            <i class="cal__dayEvent-actionSvg far fa-trash-alt"></i>
                        </button>
                    </div>
                </div>

            </div>
        `;
    }
}

export default CalendarDaysList;