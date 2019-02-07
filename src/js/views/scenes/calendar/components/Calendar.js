import Component from "#components/component";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.date = new Date();
        this.currentDay = this.date.getDay();
        this.currentMonth = this.date.getMonth();
        this.currentYear = this.date.getFullYear();
    }

}

export default Calendar;