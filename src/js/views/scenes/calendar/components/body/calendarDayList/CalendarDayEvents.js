import Component from "#components/component";
import * as model from "./model";

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
    //  If day active has events
    //      - On click show the events in a row
    //
    //  If day has no events
    //      - On click do nothing
    //
    //
    //



        // let cellRowWrap = element.parentNode.parentNode;
        // const timestamp = element.getAttribute('date-timestamp');

        // var el = document.getElementsByClassName('cal__dayEvents')[0];
        // if(el) el.remove();

        // model.getDayEventsLenght()

        // let calendarDayEvents = createElement(new CalendarDayEvents({calendarData}))
        // let dayEvents = cellRowWrap.appendChild(calendarDayEvents);
        // dayEvents.style.height = '';
        // dayEvents.classList.add('is-visible')
    

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
 
    

    renderDayEvent(events) {
        return events.map(function(event, index) {
            return /*html*/`
            <div class="cal__dayEvent" event-id="${event.id}">
                <span class="cal__dayEvent-color"></span>

                <div class="cal__dayEvent-title">
                    <span>${event.title}</span>
                </div>

                <div class="cal__dayEvent-actions">
                    <button onclick="{CalendarDaysList.updateDayEvent()}" class="cal__dayEvent-action btn--clean">
                        <i class="cal__dayEvent-actionSvg far fa-edit"></i>
                    </button>
                    <button onclick="{CalendarDaysList.deleteDayEvent(${event.id})}" class="cal__dayEvent-action btn--clean">
                        <i class="cal__dayEvent-actionSvg far fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;
        }).join("");
    }

    render() {
        return /*html*/`
            <div class="cal__dayEvents">         
                ${this.renderDayEvent(this.props.cellDateEvents)}
            </div>
        `;
    }
}

export default CalendarDaysList;