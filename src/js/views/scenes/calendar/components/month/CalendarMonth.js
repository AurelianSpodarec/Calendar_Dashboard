import Component from "#components/component";

class CalendarMonth extends Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this);
        this.setSubscriber("calendar", this.onEvent);
    }

 
    onEvent(state, action) {
        
    }

    setCurrentDate() {

    }

    setMonthDays() {
        let date = new Date();
        // Get current month
        // Loop through month days
        let months = date.getMonth();
        return /*html*/`
        <!-- Display All days of the month -->
            <div class="cal__cell-row">
                <div class="cal__cell cal__cell-day">
                    <div class="cal__cell-top">
                        <span class="cal__day-number">${date.getDate()}</span>
                    </div>
                </div>
            </div>
        `;
    }

    render() {
        return /*html*/`
        <section class="cal__month">
        <div class="cal__month-view">

            <header class="cal__week-row">
                <span class="cal__cell-weekday cal__cell">Monday</span>
                <span class="cal__cell-weekday cal__cell">Tuesday</span>
                <span class="cal__cell-weekday cal__cell">Wedenesday</span>
                <span class="cal__cell-weekday cal__cell">Thursday</span>
                <span class="cal__cell-weekday cal__cell">Friday</span>
                <span class="cal__cell-weekday cal__cell">Saturday</span>
                <span class="cal__cell-weekday cal__cell">Sunday</span>
            </header>
            
            <section class="cal__month-days">
                ${this.setMonthDays()}
            </section>
        `;
    }
}

export default CalendarMonth;