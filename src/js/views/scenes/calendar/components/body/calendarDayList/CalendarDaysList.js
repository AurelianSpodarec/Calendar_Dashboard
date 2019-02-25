import Component from "#components/component";
import createElement from "#lib/createElement";
import CalendarBody from "./CalendarBody";
import { 
    NEXT_CALENDAR_MONTH,
    PREV_CALENDAR_MONTH,
    SET_CURRENT_DATE
 } from "./../../../calendarEvents";
import { SetSelectedDayCell } from "./../calendarBodyActions";
import initState from "./../initState";
import reducer from "./../calendarBodyReducer";
import { SET_SELECTED_DAY_CELL } from "../calendarBodyEvents";
import CalendarDayEvents from "./CalendarDayEvents";
import * as model from "./model";

class CalendarDaysList extends Component {
    constructor(props) {
        super(props)
        this.onEvent = this.onEvent.bind(this);
        this.currentYear = this.getStoreState().calendar.currentYear;
        this.currentMonth = this.getStoreState().calendar.currentMonthIndex;
        this.setReducer("calendarDaysList", reducer, initState);
        this.setSubscriber("calendarDaysList", this.onEvent);
    }

    selectActive(element) {
        Array.from(this.refs.monthScreen.querySelectorAll('[data-ref=cellDay]')).forEach(ref => {
            ref.classList.remove("is-selected");         
        });
        element.classList.add('is-selected')
        this.dispatch(SetSelectedDayCell(element.getAttribute('date-timestamp')))
    }

    getDayCell() {
        
    }

    onEvent(state, action) {

        if(action.type === SET_SELECTED_DAY_CELL) {
            let dayTimestamp = this.getStoreState().calendarDaysList.selectedDayCellId;
            let dayElement = document.querySelector(`[date-timestamp="${dayTimestamp}"]`);

          
            const cellDate = {
                year: dayTimestamp.split("-")[0],
                month: dayTimestamp.split("-")[1],
                day:  dayTimestamp.split("-")[2],
            }
            let cellDateEvents = model.getDayEvents(parseFloat(cellDate.year), parseFloat(cellDate.month - 1), parseFloat(cellDate.day));





            // Remove THe Cell Row Dropdown From ALl
            let allCellRowWrap = document.querySelectorAll(".cal__cell-row-wrap");
            allCellRowWrap.forEach(element => {
                let dayEventDropdown = element.childNodes[1];
                if(dayEventDropdown !== undefined) {
                    dayEventDropdown.remove();
                }
            })

            // Creates the dropdown
            let cellRowWrap = dayElement.parentNode.parentNode;
            
            
                let dayEventElement = createElement(new CalendarDayEvents({ cellDateEvents }))
                let dayEvent = cellRowWrap.appendChild(dayEventElement);
                // Show START
                dayEvent.style.display = 'block';
                let dayEventHeight = dayEvent.scrollHeight;
                dayEvent.style.display = '';
                dayEvent.classList.add('is-visible')
                dayEvent.style.height = dayEventHeight + "px";
                window.setTimeout(function () {
                    dayEvent.style.height = '';
                }, 250);
                // Show END
          
            
        }

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