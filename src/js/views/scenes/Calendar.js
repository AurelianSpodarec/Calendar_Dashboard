let Calendar = {
    render: async () => {
        return /*html*/`
            <header class="cal__header" style="background-image: url('https://c8.alamy.com/comp/PTB79P/vector-banner-blue-winter-background-with-ice-and-snow-PTB79P.jpg');">
            <div class="cal__header-container">


                <div class="cal__header-top">
                    <div class="cal__page-info">
                        <i class="cal__page-icon fas fa-cal-day"></i>
                        <span class="cal__page-title">Calendar</span>
                    </div>

                    <div class="cal__toolbar"> 
                        <button class="cal__tool-btn">
                            <i class="cal__tool-icon fas fa-search" arial-label="Search Calendar" title="Search Calendar"></i>
                        </button>
                        <button class="cal__tool-btn">
                            <i class="cal__tool-icon fas fa-cal-day" arial-label="Go to current date" title="Today"></i>
                        </button>
                        <button class="cal__tool-btn">
                            <i class="cal__tool-icon far fa-calendar-alt" arial-label="Month" title="Month"></i>
                        </button>
                    </div>
                </div>

                <div class="cal__header-bottom">
                    <button data-ref="prev-month-btn" class="cal__pagination-arrow"><i class="fas fa-angle-left"></i></button>
                    <span class="cal__current-month">February 2019</span>
                    <button data-ref="next-month-btn" class="cal__pagination-arrow"><i class="fas fa-angle-right"></i></button>
                </div>


            </div>
            </header>


            <section class="cal__month">

                <div class="cal__month-view">
                    <header class="cal__week-row cal__cell-row">
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

export default Calendar;