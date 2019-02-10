import Component from "#components/component";
import createElement from "#lib/createElement";
import Row from "../../row";

class Month extends Component {
    constructor(props) {
        super(props);
        this.date = new Date();
    }

    
 
    render() {
        this.setChild("monthScreen", Row)
        return /*html*/`
            <section data-child="monthScreen" class="cal__month-screen"> </section>
        `;
    }
}

export default Month;                
                
                
                
                    
               