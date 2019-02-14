class Store {
    constructor() {
        this.state = {};
        console.log(this.reducers = {});
        console.log(this.subscribers = {});
        this.setSubscriber = this.setSubscriber.bind(this);
        this.dispatch = this.dispatch.bind(this);
    }
  
    setSubscriber(name, subscriber) {
        this.subscribers[name] = subscriber;
    }
  
    setReducer(name, reducer, initState = {}) {
        this.state[name] = initState;
        this.reducers[name] = reducer;
    }
  
    dispatch(action) {
        // let newState = {};
        // const reducerNames = Object.keys(this.reducers);

        // for (const reducerName of reducerNames) {
        //     const currentState = this.state[reducerName];
        //     newState = this.reducers[reducerName](currentState, action);
        //     this.state[reducerName] = Object.assign({}, currentState, newState);
        // }

        // const subscriberNames = Object.keys(this.subscribers);

        // for (const subscriberName of subscriberNames) {
        //     const onEvent = this.subscribers[subscriberName];
        //     if (onEvent) {
        //         onEvent(this.state, action);
        //     }
        // }
        console.log(action)
    }
  }
  

export default Store;