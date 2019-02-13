import Component from "#components/component";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.setSubscriber("todo", this.onEvent);
    }

    render() {
        return /*html*/`
            <section data-js="scene-element" class="scene">
                Todo
            </section>
        `;
    }
}

export default ToDo;