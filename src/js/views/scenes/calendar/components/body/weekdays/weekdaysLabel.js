import Component from "#components/component";

class WeekdaysLabel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
}

export default WeekdaysLabel;        