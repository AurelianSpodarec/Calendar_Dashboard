import Component from "#components/component";

class Day extends Component {
    constructor(props) {
        super(props);
    }

 
    
    render(i) {
        var i = i;
        return /*html*/`
            <div class="cal__cell cal__cell-day is-today">
                <div class="cal__cell-top">
                    <span class="cal__day-number">${i}</span>
                </div>
            </div> 
        `;
    }
}

export default Day;                
                
                
                
                    
               