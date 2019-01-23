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
//  [] Remove hash(#)
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

    removeHash () { 
       
    }

    checkRoute() {
    
        let path = window.location.hash.substring(1)
        let folders = path.split('/');

        if (folders.length == 1) folders.push('index');
       
        let filteredRoutes = routes.find(obj => { 
            return obj.match.controller == folders[0] &&
            obj.match.action == folders[1]
        });
        

        if(filteredRoutes == undefined) {
            return NotFound;
        } else {
            return filteredRoutes.component;
        }

        
        // let findAction = routes.find(obj => obj.match.action === window.location.hash.substring(1));
        // let findControler = routes.find(obj => obj.match.controller == window)
        
        // console.log(findAction);
        // let filteredRoutes = routes.filter(obj => obj.match.action === window.location.hash.substring(1));

        

        //return filteredRoutes.length ? filteredRoutes[0].component : NotFound;
    }

    async navigate() {
        this.removeHash();
        this.render(this.checkRoute());
        // this.checkRoute();
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