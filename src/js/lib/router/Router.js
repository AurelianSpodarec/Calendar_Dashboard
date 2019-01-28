import { routes } from "./routing";
import NotFound from "../../views/pages/NotFound";

//  
//  TODO:
//  [x] Get current location
//  [x] Check current location with registered routes
//  [x] Get current location and set it as title for the document
//  [] Check if its root(/) and set default template (meaning: set the root to be e.g. dashboard page)
//  [] Remove hash(#)
//

class Router {
    constructor() {
        this.listen();
    }

    listen() {
        window.addEventListener("hashchange", () => {
            this.navigate();
        });
        this.navigate();
    }

    checkRoute() {
        let path = window.location.hash.substring(1);
        let folders = path.split('/');

        if (folders.length == 1) folders.push('index');
       
        let filteredRoutes = routes.find(obj => { 
            return obj.match.controller == folders[0] &&
            obj.match.action == folders[1]
        });
        
        // TODO: Add a default page for root(/);
        if(filteredRoutes == undefined) {
            return NotFound;
        } else {
            return filteredRoutes.component;
        }

    }

    setDocumentTitle() {
        let documentTitle = window.location.hash;
        document.title = "Hobo | " + documentTitle.substring(1);
        return documentTitle;
    }

    async navigate() {
        this.render(this.checkRoute());
        this.setDocumentTitle();
    }

    async render(pageName) {
        let mainView = document.querySelector('[data-js="main-container"]');
        mainView.innerHTML = await pageName.render(); ;
    }
}

export default Router;