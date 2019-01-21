import { routes } from "../utils/routing";
import Error404 from '../../views/pages/Error404';

class Router {
    constructor() {
        window.addEventListener("hashchange", this.onHashChange.bind(this));
    }

    async onHashChange() {
        let filteredRoutes = routes.filter(obj => obj.path === window.location.hash);
        this.render(filteredRoutes.length ? filteredRoutes[0].page : Error404);
    }

    async render(page) {
        let mainView = document.querySelector('[data-js="main-container"]');
    
        mainView.innerHTML = await page.render();    
    }

}

export default Router;