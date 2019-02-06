import Component from "../component";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this);
        this.setSubscriber("calendar", this.onEvent);
    }

 
    onEvent(state, action) {
        
    }

    render() {
        return /*html*/`
         
        `;
    }
}

export default Header;