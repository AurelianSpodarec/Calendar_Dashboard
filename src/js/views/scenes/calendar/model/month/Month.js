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


        // Get Date - getDate() method returns the day of a date as a number (1-31):
        // Get Day - getDay() method returns the weekday of a date as a number (0-6):
        // Get Year - getFullYear() method returns the year of a date as a four digit number:
        // Get Month - getMonth() method returns the month of a date as a number (0-11):


        // Have Prev/Next Month - header banner
        // Have current Month - toolbar
    }

    getPrevMonth() {
        
    }

    getNextMonth() {

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