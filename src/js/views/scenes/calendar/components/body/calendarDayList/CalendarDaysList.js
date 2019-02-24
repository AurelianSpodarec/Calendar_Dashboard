import Component from "#components/component";
import CalendarBody from "./CalendarBody";
import createElement from "#lib/createElement";
import CalendarDayEvents from "./CalendarDayEvents";
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

    removeDayEvents() {

    }
    

    selectActive(element) {
        this.removeClasses();
        element.classList.add('is-selected')
        let cellRowWrap = element.parentNode.parentNode;

        // const timestamp = element.getAttribute('date-timestamp');
        // // console.log(timestamp)
        var el = document.getElementsByClassName('cal__dayEvents')[0];
        console.log(el)
        if(el) {
            el.remove();
        }
        // if its open, just update the inndex content
        
        let calendarDayEvents = createElement(new CalendarDayEvents())
        let apend = cellRowWrap.appendChild(calendarDayEvents);

        apend.style.display = 'block';
        let apendHeight = apend.scrollHeight;
        apend.style.display = '';
         
        apend.classList.add('is-visible')
        
         
        apend.style.height = apendHeight + "px";
        window.setTimeout(function () {
            apend.style.height = '';
        }, 250);
        
        
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