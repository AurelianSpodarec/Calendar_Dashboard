import { routes } from "../utils/routing";

class Router {
    constructor() {
        window.addEventListener("hashchange", this.onHashChange.bind(this));
    }


    // Monitor changes in the address bar
    // - Get the url
    onHashChange() {
        let filteredRoutes = routes.filter(obj => obj.path === window.location.hash);
        console.log(filteredRoutes);
        this.render(filteredRoutes ? filteredRoutes[0].scene : Error404);
    }

    // Compare URl with registered routes
    // Get the current url and compare
    // FIlter the routes
    check() {
    

    }

    navigation() {

    }

    // Render the correct page
    render(pageName) {
        let mainView = document.querySelector('[data-js="main-container"]');
        mainView.innerHTML = pageName;
    }

}

export default Router;


        // if(location) {
        //     console.log("hello");
        //     let filteredRoutes = routes.filter(obj => obj.path === this.listen)
        //     filteredRoutes[0].scene
        //     // Get the correct page
        //     return; // returing page and then in render pass it in the view.page(dynamic)
        // } else {
        //     //page.view(Error404); - idea we want this right
        //     console.log('Page error');
        //     return Error404;
        // }

    // // Compare URL with registered 'routes'
    // check() {
    //     console.log('checkkkkkkkkkkkk')

    //     const registeredRoutes = routes;
        


    //     let filteredRoutes = routes.filter(obj => obj.path === window.location.hash);
    //     console.log(filteredRoutes);
    // }

    // // Did the URL change?
    // hasChanged(changed) {
         
    // }

    // // Monitor for change in address bar
    // listen() {
    //     window.addEventListener("hashchange", () => {
    //        console.log(window.location.hash)

    //        let filteredRoutes = routes.filter(obj => obj.path === window.location.hash);
    //        console.log(filteredRoutes);
    //        return filteredRoutes ? filteredRoutes[0].scene : Error404;
    //     });
    // }

    // //changes the current address and fires the route's handler.
    // navigate() {

    // }

    // //  display the page
    // render(pageName) {
        
    // }






// const getRoute = location => {
//     let filteredRoutes = routes.filter(obj => obj.path === location);console.log(filteredRoutes);
//     return filteredRoutes ? filteredRoutes[0].scene : Error404;
    
// }

// window.addEventListener('popstate', function(e) {
//     let mainView = document.querySelector('[data-js="main-container"]');
//     mainView.innerHTML = getRoute(window.location.hash);
//     // mainView.appendChild(component.render()
// });