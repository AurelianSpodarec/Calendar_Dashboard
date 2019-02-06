let Calendar = {
    render: async () => {
        return /*html*/`
            <header class="cal__header" style="background-image: url('https://i.ytimg.com/vi/KLLZTAPfs4Y/maxresdefault.jpg');">
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


            <section class="cal__scheme">
            <div class="cal__scheme-inner">

                <div class="cal__month-view">
                    <header class="cal__week">
                        <span class="cal__weekday">Monday</span>
                        <span class="cal__weekday">Tuesday</span>
                        <span class="cal__weekday">Wedenesday</span>
                        <span class="cal__weekday">Thursday</span>
                        <span class="cal__weekday">Friday</span>
                        <span class="cal__weekday">Saturday</span>
                        <span class="cal__weekday">Sunday</span>
                    </header>
                    <section class="cal__month">
                        <div>
                            <div class="cal__cel cal__day-cell">
                                <span class="day-number">1</span>
                            </div>
                            <div class="cal__cel cal__day-cell">
                                <span class="day-number">2</span>
                            </div>
                            <div class="cal__cel cal__day-cell">
                                <span class="day-number">3</span>
                            </div>
                            <div class="cal__cel cal__day-cell">
                                <span class="day-number">4</span>
                            </div>
                            <div class="cal__cel cal__day-cell">
                                <span class="day-number">5</span>
                            </div>
                            <div class="cal__cel cal__day-cell">
                                <span class="day-number">6</span>
                            </div>
                            <div class="cal__cel cal__day-cell">
                                <span class="day-number">7</span>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
            </section>
        `;
    }
}

export default Calendar;