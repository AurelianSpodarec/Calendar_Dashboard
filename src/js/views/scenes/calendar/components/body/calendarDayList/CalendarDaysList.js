import Component from "#components/component";
import createElement from "#lib/createElement";
import CalendarDayEvents from "./CalendarDayEvents";
import CalendarBody from "./CalendarBody";
import calendarData from "#json/calendarData";
import { 
    NEXT_CALENDAR_MONTH,
    PREV_CALENDAR_MONTH,
    SET_CURRENT_DATE
 } from "./../../../calendarEvents";
 import * as model from "./model";

class CalendarDaysList extends Component {
    constructor(props) {
        super(props)
        this.onEvent = this.onEvent.bind(this);
        this.currentYear = this.getStoreState().calendar.currentYear;
        this.currentMonth = this.getStoreState().calendar.currentMonthIndex;
        this.setSubscriber("CalendarDaysList", this.onEvent);
    }

    selectActive(element) {
        Array.from(this.refs.monthScreen.querySelectorAll('[data-ref=cellDay]')).forEach(ref => {
            ref.classList.remove("is-selected");         
        });
        element.classList.add('is-selected')



        let cellRowWrap = element.parentNode.parentNode;
        const timestamp = element.getAttribute('date-timestamp');

        var el = document.getElementsByClassName('cal__dayEvents')[0];
        if(el) el.remove();

        let calendarDayEvents = createElement(new CalendarDayEvents({calendarData}))
        let dayEvents = cellRowWrap.appendChild(calendarDayEvents);
        dayEvents.style.height = '';
        dayEvents.classList.add('is-visible')
    }
   
    onEvent(state, action) {
        if(action.type === NEXT_CALENDAR_MONTH) {
            this.renderMonthBody();
        }

        if(action.type === PREV_CALENDAR_MONTH) {
            this.renderMonthBody();
        }
        
        if(action.type === SET_CURRENT_DATE){
            this.renderMonthBody();
        }

    }

    renderMonthBody() {
        this.refs.monthScreen.innerHTML = "";
        const calendarBody = createElement(new CalendarBody());
        this.refs.monthScreen.appendChild(calendarBody)
    }

    onCreated() {
        this.renderMonthBody();
    }
    
    render() {
     
        return /*html*/`
            <div data-ref="monthScreen" class="cal__month-screen"> </div>
        `;
    }
}

export default CalendarDaysList;