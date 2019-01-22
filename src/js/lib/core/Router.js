import { routes } from "../utils/routing";
import NotFound from "../../views/pages/NotFound";

//
//  Get current location
//  Get previous location
//  Check current location with registered routes
//  Get current location and set it as title for the document
//  Check if its root(/) and set default template (meaning: set the root to be e.g. dashboard page)
//  Check if its hash(#) and return current location (meaning: don't do anything)
//

class Router {
    constructor() {
        window.addEventListener("hashchange", this.navigate.bind(this));
        this.navigate();
    }

    getCurrentLocation() {
        return window.location;
    }

    getPrevLocation() {

    }

    setDocumentTitle() {
        let documentTitle = this.getCurrentLocation().hash;
        document.title = "Hobo | " + documentTitle.substring(1);
        return documentTitle;
    }

    notFound() {

    }

    hashChanged() {

    }

    async navigate() {
        let filteredRoutes = routes.filter(obj => obj.path === this.getCurrentLocation().hash);
        this.render(filteredRoutes.length ? filteredRoutes[0].component : NotFound);
        this.setDocumentTitle();
    }

    async render(pageName) {
        let mainView = document.querySelector('[data-js="main-container"]');
        mainView.innerHTML = await pageName.render(); 
 
    }
}

export default Router;

    // TODO Router: Add the NotFound component in routing.js file

    // getDefaultPage(windowCurrentLocation) {
    //     let isRoot = location.pathname == "/";
    //     let isHash = location.pathname == "/#";
    //     let currentLocation = windowCurrentLocation;
    //     console.log("Prev Loc " + this.prevLocation)
    //     // If its just the hash, return currentLocation (do nothing in other words)
    //     // If its root '/' display dashboard
    //     console.log("Current location" + currentLocation);
    //     if(currentLocation === isHash) {
    //         console.log("Is Hash")
    //         console.log(currentLocation)
    //         return currentLocation;
    //         //return window.location.hash;
    //     } else if(currentLocation === isRoot) {
    //         console.log("Is Root")
    //         console.log(currentLocation + window.location.hash)
    //         // return window.location.hash = "#dashboard";
    //     }

    //     return currentLocation;
          
    // }

    // async onHashChange() {
    //     let filteredRoutes = routes.filter(obj => obj.path === this.getDefaultPage(window.location.hash));
    //     this.render(filteredRoutes.length ? filteredRoutes[0].component : NotFound);
    // }

    // async render(pageName) {
    //     let mainView = document.querySelector('[data-js="main-container"]');
    //     mainView.innerHTML = await pageName.render();    
    // }
    



