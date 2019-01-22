import { routes } from "../utils/routing";
import NotFound from "../../views/pages/NotFound";

//  
//  TODO:
//  [x] Get current location
//  [] Get previous location
//  [x] Check current location with registered routes
//  [x] Get current location and set it as title for the document
//  [] Check if its root(/) and set default template (meaning: set the root to be e.g. dashboard page)
//  [] Check if its hash(#) and return current location (meaning: don't do anything)
//

class Router {
    constructor() {
        window.addEventListener("hashchange", this.navigate.bind(this));
        this.navigate();
    }

    getPrevLocation() {
        
    }

    setDocumentTitle() {
        let documentTitle = window.location.hash;
        document.title = "Hobo | " + documentTitle.substring(1);
        return documentTitle;
    }

    //
    //  TODO:
    //  [] Check if its root(/) and set a default template
    //  [] Check if its NotFound, and use the components from routing
    //  [] Check if it has a hash(#) and do nothing
    //

    checkRoute() {
        let filteredRoutes = routes.filter(obj => obj.path === window.location.hash);
        return filteredRoutes.length ? filteredRoutes[0].component : NotFound;
    }

    async navigate() {
        this.render(this.checkRoute());
        this.setDocumentTitle();
    }

    async render(pageName) {
        let mainView = document.querySelector('[data-js="main-container"]');
        mainView.innerHTML = await pageName.render(); 
 
    }
}

export default Router;
 

    //     } else if(currentLocation === isRoot) { 
    //         // return window.location.hash = "#dashboard";
    //     }