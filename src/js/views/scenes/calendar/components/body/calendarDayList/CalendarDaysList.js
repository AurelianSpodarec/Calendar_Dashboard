import Component from "#components/component";
import CalendarBody from "./CalendarBody";
import createElement from "#lib/createElement";
import { NEXT_CALENDAR_MONTH, PREV_CALENDAR_MONTH, SET_CURRENT_DATE } from "./../../../calendarEvents";

class CalendarDaysList extends Component {
    constructor(props) {
        super(props)
        this.onEvent = this.onEvent.bind(this);
        this.setSubscriber("CalendarDaysList", this.onEvent);
    }

   
    onEvent(state, action) {
        if(action.type === NEXT_CALENDAR_MONTH) {
            this.refs.monthScreen.innerHTML = "";
            const calendarBody = createElement(new CalendarBody());
            this.refs.monthScreen.appendChild(calendarBody)
        }

        if(action.type === PREV_CALENDAR_MONTH) {
            this.refs.monthScreen.innerHTML = "";
            const calendarBody = createElement(new CalendarBody());
            this.refs.monthScreen.appendChild(calendarBody)
        }
        
        if(action.type === SET_CURRENT_DATE){
            this.refs.monthScreen.innerHTML = "";
            const calendarBody = createElement(new CalendarBody());
            this.refs.monthScreen.appendChild(calendarBody)
        }

    }

    onCreated() {
        const calendarBody = createElement(new CalendarBody());
        this.refs.monthScreen.appendChild(calendarBody)
    }
    
    render() {
        
        return /*html*/`
            <div data-ref="monthScreen" class="cal__month-screen"> </div>
        `;
    }
}

export default CalendarDaysList;