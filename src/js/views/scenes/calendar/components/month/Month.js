import Component from "#components/component";

class CalendarMonth extends Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this);
        this.setSubscriber("calendar", this.onEvent);
    }

 
    onEvent(state, action) {
        
    }

    monthHeader() {
        return /*html*/`
            <header class="cal__week-row">
                <span class="cal__cell-weekday cal__cell">Monday</span>
                <span class="cal__cell-weekday cal__cell">Tuesday</span>
                <span class="cal__cell-weekday cal__cell">Wedenesday</span>
                <span class="cal__cell-weekday cal__cell">Thursday</span>
                <span class="cal__cell-weekday cal__cell">Friday</span>
                <span class="cal__cell-weekday cal__cell">Saturday</span>
                <span class="cal__cell-weekday cal__cell">Sunday</span>
            </header>
        `;
    }

    monthDays() {
        return /*html*/`
            <section class="cal__month-days">
                <div class="cal__cell-row">
                    <div class="cal__cell cal__cell-day">
                        <div class="cal__cell-top">
                            <span class="cal__day-number">1</span>
                        </div>
                    </div>
                    <div class="cal__cell cal__cell-day">
                        <div class="cal__cell-top">
                            <span class="cal__day-number">2</span>
                        </div>
                    </div>
                    <div class="cal__cell cal__cell-day">
                        <div class="cal__cell-top">
                            <span class="cal__day-number">3</span>
                        </div>
                    </div>
                    <div class="cal__cell cal__cell-day">
                        <div class="cal__cell-top">
                            <span class="cal__day-number">4</span>
                        </div>
                    </div>
                    <div class="cal__cell cal__cell-day">
                        <div class="cal__cell-top">
                            <span class="cal__day-number">5</span>
                        </div>
                    </div>
                    <div class="cal__cell cal__cell-day is-today">
                        <div class="cal__cell-top">
                            <span class="cal__day-number">6</span>
                        </div>
                    </div>
                    <div class="cal__cell cal__cell-day">
                        <div class="cal__cell-top">
                            <span class="cal__day-number">7</span>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    render() {
        return /*html*/`
        <section class="cal__month">
        <div class="cal__month-view">

            ${this.calendarHeader()}
            
            <section class="cal__month-days">
                <div class="cal__cell-row">
                    <div class="cal__cell cal__cell-day">
                        <div class="cal__cell-top">
                            <span class="cal__day-number">1</span>
                        </div>
                    </div>
                    <div class="cal__cell cal__cell-day">
                        <div class="cal__cell-top">
                            <span class="cal__day-number">2</span>
                        </div>
                    </div>
                    <div class="cal__cell cal__cell-day">
                        <div class="cal__cell-top">
                            <span class="cal__day-number">3</span>
                        </div>
                    </div>
                    <div class="cal__cell cal__cell-day">
                        <div class="cal__cell-top">
                            <span class="cal__day-number">4</span>
                        </div>
                    </div>
                    <div class="cal__cell cal__cell-day">
                        <div class="cal__cell-top">
                            <span class="cal__day-number">5</span>
                        </div>
                    </div>
                    <div class="cal__cell cal__cell-day is-today">
                        <div class="cal__cell-top">
                            <span class="cal__day-number">6</span>
                        </div>
                    </div>
                    <div class="cal__cell cal__cell-day">
                        <div class="cal__cell-top">
                            <span class="cal__day-number">7</span>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

export default CalendarMonth;