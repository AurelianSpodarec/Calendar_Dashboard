class Component {

    constructor(props = {}) {
        this.refs = {}; // Re-render just the component
        this.state = {}; // Store local state
        this.props = props;
    }

    getStoreState() {
        return store.state;
    }

    setState() {

    }

    getState() {
        
    }

    render() {

    }
       
}

export default Component;