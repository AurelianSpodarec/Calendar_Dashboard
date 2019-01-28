class Store {
    constructor() {
        this.state = {};
        this.reducers = {};
        // this.subscribers = {};
        // this.setReducer = this.setReducer.bind(this);
        // this.setSubscriber = this.setSubscriber.bind(this);
        // this.dispatch = this.dispatch.bind(this);
    }
  
    setSubscriber(name, subscriber) {
        this.subscribers[name] = subscriber;
    }
  
    setReducer(name, reducer, initState = {}) {
        this.state[name] = initState;
        this.reducers[name] = reducer;
    }
  
    dispatch(action) {
        console.log("hello")
    }
  }
  

export default Store;