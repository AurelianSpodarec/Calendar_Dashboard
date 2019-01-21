export default class Page {
    constructor() {
    }

    render(el) {
        el.innerHTML = this.html;
        return;
    }
}