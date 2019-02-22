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
        let cellDays = document.querySelectorAll('[data-ref=cellDay]');
        for (var i = 0; i < cellDays.length; i++) {
            let cellDay = cellDays[i]
            cellDay.classList.remove('is-selected')
            let v = new Date().toDateString();

            if(cellDay.getAttribute('date-timestamp') === v) {
                console.log(cellDay.classList.add('is-today'))
            };

        }
        console.log(this.refs.monthScreen.children[0])
        
       
    }

    selectActive(obj) {
        this.removeClasses();
        obj.classList.add('is-selected')
        const ad = obj.getAttribute('date-timestamp');

        console.log(ad)
        
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
        // this.removeClasses();
         
      
       
        // console.log(Array.of(this.refs.monthScreen.childNodes).forEach(element => {
        //     // element.classList.add('is-today');
        //     console.log(element)
        // }));
    }
    
    render() {
     
        return /*html*/`
            <div data-ref="monthScreen" class="cal__month-screen"> </div>
        `;
    }
}

export default CalendarDaysList;