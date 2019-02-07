import Component from "#components/component";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this);
        this.setSubscriber("todo", this.onEvent);
    }

 
    onEvent(state, action) {
        
    }

    render() {
        return /*html*/`
        <section data-js="scene-element" class="scene">
            Todo
        </section>
        `;
    }
}

export default Todo;