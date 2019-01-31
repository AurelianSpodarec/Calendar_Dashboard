import Store from "../../lib/store/index";

class Component {
    constructor(props = {}) {
        this.refs = {};
        this.state = {};
        this.props = props;
        this.children = {};
    }
  
    getStoreState() {
        return store.state;
    }
  
    setReducer(name, reducer, initState = {}) {
        store.setReducer(name, reducer, initState);
    }
  
    setSubscriber(name, subscriber) {
        store.setSubscriber(name, subscriber);
    }
  
    setChild(name, child) {
    //   this.children[name] = createElement(child);
    }
  }

export default Component;