class Month {
    constructor() {
        this.date = new Date();
    }
 
    getCurrentMonth() {
        // let currentMonth = this.date.getMonth();
        // Update the Label: February 2019
        // Update the calendar body: 28days
        // Update the active class on current day

        //Get Previous and Next month days to feel up the calendar days

    }

    getPrevMonth() {
        
    }

    getNextMonth() {

    }

    daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    monthAsName(monthIndex) {
        return [
            "January",
            "Febuary",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ][monthIndex]
    }

}

export default Month;