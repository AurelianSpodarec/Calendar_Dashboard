import { routes } from "./routing";
import NotFound from "#views/scenes/other/NotFound";
import createElement from "../createElement";
 

//  
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
        const path = window.location.hash.substring(1);
        const folders = path.split('/');

        if (folders.length === 1) folders.push('index');
       
        const filteredRoutes = routes.find(obj => 
            obj.match.controller === folders[0] &&
            obj.match.action === folders[1]
        );
        
        if(filteredRoutes === undefined) {
            return NotFound;
        } else {
            return {
                component: filteredRoutes.component,
                className: filteredRoutes.className || null
            };
        }

    }

    setDocumentTitle() {
        const documentTitle = window.location.hash;
        document.title = "Hobo | " + documentTitle.substring(1);
        return documentTitle;
    }

    async navigate() {
        this.render(this.checkRoute());
        this.setDocumentTitle();
    }

    async render(pageObj) {
        const sceneElement = document.querySelector('[data-js="scene-element"]');


        const pageName = pageObj.className;
        const pageComponent = pageObj.component;
        
        
        const newPageName = new pageComponent();
        const pageNode = createElement(newPageName)


        window[pageName] = newPageName;
        sceneElement.parentNode.replaceChild(pageNode, sceneElement);
    }
}

export default Router;