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

function getEventId(eventId) {
    // var map1 = new Map();
    // map1.set({299: {1:{id: 3835}}})
    // console.log(map1.get(`${eventId}`));

    // return calendarData.get(eventId);
}

function updateEventDay(eventId, title, description) {

}

function deleteEventDay (events, index) {
    events.splice(index, 1);
}

export {
    getDayEvents,
    getDayEventsLenght,
    getEventId,
    updateEventDay,
    deleteEventDay
}