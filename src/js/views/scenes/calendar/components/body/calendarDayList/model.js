import calendarData from "#json/calendarData";

function getDayEvents(year, month, day) {
    const eventYear = calendarData[year];
    if (eventYear !== undefined) {
        const eventMonth = eventYear[month];
  
        if (eventMonth !== undefined) {
            const eventDay = eventMonth[day];

           if (eventDay !== undefined)
             return eventDay.events;
        }
    }
}

function getDayEventsLenght(dayEvents) {
    if (dayEvents === undefined) {
        return 0;
    }
    return dayEvents.length;
}

export {
    getDayEvents,
    getDayEventsLenght
}