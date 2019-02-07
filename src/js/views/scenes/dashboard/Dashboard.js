import Component from "#components/component";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this);
        this.setSubscriber("dashboard", this.onEvent);
    }

 
    onEvent(state, action) {
        
    }

    render() {
        return /*html*/`
        <section data-js="scene-element" class="scene">
            Dashboard
        </section>
        `;
    }
}

export default Dashboard;