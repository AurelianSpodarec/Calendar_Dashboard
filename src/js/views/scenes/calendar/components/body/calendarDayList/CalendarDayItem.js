import Component from "#components/component";
import createElement from "#lib/createElement";

class CalendarDayItem extends Component {
    constructor(props) {
        super(props);
        this.currentYear = this.getStoreState().calendar.currentYear;
        this.currentMonth = this.getStoreState().calendar.currentMonthIndex;
        this.setSubscriber("CalendarDayItem", this.onEvent);
    }

    todayDate() {
        // console.log(this.refs)
      
        // const element = Array.from(this.refs.cellDay.childNodes).classList.add('is-today')
        // this.refs.cellDay.classList.add('is-today');
        // this.refs.cellDay.forEach(ref => {
        //     ref.classList.remove("sidebar__li");
        //     ref.classList.remove("sidebar__li--selected");
        //     ref.classList.add("sidebar__li");
        // });
        // console.log(Array.of(this.refs))
   }

    renderDayCell() {
        
        let curMonth;
        if(this.props.prevMonth) {
            curMonth = this.currentMonth - 1;
        } else if (this.props.nextMonth) {
            curMonth = this.currentMonth + 1;
        } else {
            curMonth = this.currentMonth;
        }
        
        let days = this.props.day;
        let timestamp = new Date( this.currentYear, curMonth, days).toDateString();
        let isToday = timestamp === new Date().toDateString() ? "is-today" : "";
        let otherMonth = this.props.otherMonth ? "is-other-month" : "";

        return `
            <div data-ref="cellDay" onclick="CalendarDaysList.selectActive(this)" class="cal__cell cal__cell-day ${isToday} ${otherMonth}" 
                date-timestamp="${timestamp}" >
                <div class="cal__cell-top">
                    <span class="cal__day-number">${days}</span>
                </div>
            </div> 
        `
    }

    render() {
        this.todayDate();
        return /*html*/`
            ${this.renderDayCell()}
        `;
    }
}

export default CalendarDayItem;