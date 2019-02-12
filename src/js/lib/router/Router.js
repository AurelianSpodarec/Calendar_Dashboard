import { routes } from "./routing";
import NotFound from "#views/scenes/other/NotFound";
import createElement from "../createElement";
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
        this.listen = this.listen;
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
            obj.match.action == folders[1];
        });

        
        // TODO: Add a default page for root(/);
        if(filteredRoutes == undefined) {
            return NotFound;
        } else {
            return {
                component: filteredRoutes.component,
                className: filteredRoutes.className || null
            };
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

    async render(pageObj) {
        let sceneElement = document.querySelector('[data-js="scene-element"]');


        let pageName = pageObj.className;
        let pageComponent = pageObj.component;

        let newPageName = new [pageComponent]();
        let pageNode = createElement(newPageName)

        window[pageName] = newPageName;
        sceneElement.parentNode.replaceChild(pageNode, sceneElement);
    }
}

export default Router;