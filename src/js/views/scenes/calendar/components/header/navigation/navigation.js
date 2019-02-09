import Component from "#components/component";
 

class Navigation extends Component {
    constructor(props) {
        super(props);
    }
    renderCurrentMonth(event) {
        this.refs.currentMonth.textContent = "August 2020";
    }

    onCreated() {
        this.refs.currentMonth.textContent = "August 2020";
    }
    render() {
        return /*html*/`
            <div class="cal__header-bottom">
                <button onClick="navigation.prevMonth(event)" class="cal__pagination-arrow"><i class="fas fa-angle-left"></i></button>
                <span class="cal__current-month" data-ref="currentMonth">February 2019(dynamic)</span>
                <button onClick="navigation.nextMonth(event)" class="cal__pagination-arrow"><i class="fas fa-angle-right"></i></button>
            </div>
        `;
    }
}

export default Navigation;        

                