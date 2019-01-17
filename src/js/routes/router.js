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

}

// WHat the hell am I doing

const views = [
    {
        path: '/',
        name: "Dahsboard"
    },
    {
        path: '/todo',
        name: "To-Do"
    },
    {
        path: '/calendar',
        name: "Calendar"
    },
    {
        path: '/github/my-profile',
        name: "My Profile"
    },
    {
        path: '/github/stats',
        name: "Stats"
    },
    {
        path: '/github/search-user',
        name: "Search User"
    }
]