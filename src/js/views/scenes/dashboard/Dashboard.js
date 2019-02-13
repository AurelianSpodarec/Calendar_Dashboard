import Component from "#components/component";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.setSubscriber("dashboard", this.onEvent);
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