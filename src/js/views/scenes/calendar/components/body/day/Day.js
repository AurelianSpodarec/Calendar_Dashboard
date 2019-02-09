import Component from "#components/component";

class Day extends Component {
    constructor(props) {
        super(props);
    }

 
    
    render() {
        return /*html*/`
            <div class="cal__cell cal__cell-day is-today">
                <div class="cal__cell-top">
                    <span class="cal__day-number">1</span>
                </div>
            </div> 
        `;
    }
}

export default Day;                
                
                
                
                    
               