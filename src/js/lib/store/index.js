import Store from "./Store";

const store = new Store();

window.__STATE__ = store.state;

export default store;