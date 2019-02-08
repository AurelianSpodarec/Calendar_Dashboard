import Component from "#components/component";

class CalendarBody extends Component {
    constructor(props) {
        super(props);
    }

    prevMonthBtn(event) {
        console.log('yes')
    }

    nextMonthBtn(event) {
        console.log('s')
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
                <section class="cal__month-screen">
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

            </div>
            </section>
        `;
    }
}

export default CalendarBody;