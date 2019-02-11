class CalModel {
    constructor() {
        this.date = new Date();




        this.theDay = this.date.getDate();
        this.theMonth = monthNames[this.date.getMonth()];
        this.theYear = this.date.getFullYear();
        this.daysInMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
        this.firstDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay()];
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