export default class Router {
    constructor() {

    }


    // Compare URL with registered 'views'
    check() {

    }

    // Monitor for change in address bar
    listen() {

    }

    //changes the current address and fires the route's handler.
    navigate() {

    }

    async show(pageName) {
        const page = this.routes[pageName];
        await page.load();
        this.el.innerHTML = '';
        page.show(this.el);
    }

}
