import Component from "#components/component";
import CalendarBody from "./CalendarBody";
import createElement from "#lib/createElement";
import { 
    NEXT_CALENDAR_MONTH,
    PREV_CALENDAR_MONTH,
    SET_CURRENT_DATE
 } from "./../../../calendarEvents";

class CalendarDaysList extends Component {
    constructor(props) {
        super(props)
        this.onEvent = this.onEvent.bind(this);
        this.setSubscriber("CalendarDaysList", this.onEvent);
    }

  

    removeClasses() {
        Array.from(this.refs.monthScreen.querySelectorAll('[data-ref=cellDay]')).forEach(ref => {
            ref.classList.remove("is-selected");         
        });
    }

    selectActive(element) {
        this.removeClasses();
        element.classList.add('is-selected')

        const timestamp = element.getAttribute('date-timestamp');
        console.log(timestamp)
    }

    renderMonthBody() {
        this.refs.monthScreen.innerHTML = "";
        const calendarBody = createElement(new CalendarBody());
        this.refs.monthScreen.appendChild(calendarBody)
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