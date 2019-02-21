import Component from "#components/component";
import createElement from "#lib/createElement";

class CalendarDayItem extends Component {
    constructor(props) {
        super(props);
        this.currentYear = this.getStoreState().calendar.currentYear;
        this.currentMonth = this.getStoreState().calendar.currentMonthIndex;
        this.setSubscriber("CalendarDayItem", this.onEvent);
    }
  
    render() {
        let days = this.props.day;
        let otherMonth = this.props.otherMonth ? "is-other-month" : "";
        // TODO: display the correct today date with a timestamp
        let today = (new Date().getDate() === days) ? "is-today" : "";
        // new Date( new Date().getFullYear(), new Date().getMonth(), 1).getDay()
    //    let  prev_month = this.getStoreState().calendar.currentMonthIndex == 0 ? 11 : this.getStoreState().calendar.currentMonthIndex - 1,

    //    if(this.props.otherMonth) ? prev_month = this.getStoreState().calendar.currentMonthIndex == 0 ? 11 : this.getStoreState().calendar.currentMonthIndex - 1,
    //    :

        // switch (action) {
        //     case 'prev':
        //     date = new Date(date.getFullYear(), date.getMonth() - 1, 1)
        //     break
        //        case 'current'
        //     case 'next':
        //     date = new Date(date.getFullYear(), date.getMonth() + 1, 1)
        //     break
        // }
// is prevMonth - 1
// is nextMonth + 1

        let prevMonth = this.props.prevMonth ? this.currentMonth - 1 : this.currentMonth;
        let nextMonth = this.props.nextMonth ? this.currentMonth + 1 : this.currentMonth;
        let currentMonth = this.currentMonth;

        let timeStampMonth = 3;


        let curMonth;
        if(this.props.prevMonth) {
            curMonth = this.currentMonth - 1;
        } else if (this.props.nextMonth) {
            curMonth = this.currentMonth + 1;
        } else {
            curMonth = this.currentMonth;
        }
      
        return /*html*/`
            <div 
                class="cal__cell cal__cell-day ${today} ${otherMonth}" 
                date-timestamp="${new Date( this.currentYear, curMonth, days).toDateString()}"
            >

            
                <div class="cal__cell-top">
                    <span class="cal__day-number">${days}</span>
                </div>
            </div> 
        `;
    }
}

export default CalendarDayItem;