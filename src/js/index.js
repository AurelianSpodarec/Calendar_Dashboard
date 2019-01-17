import fontawesome from '@fortawesome/fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(regular)
fontawesome.library.add(solid)
fontawesome.library.add(brands)

import '../styles/index.scss';
import Layout from './views/Layout';
import Sidebar from './views/generic/Sidebar';
import Header from './views/generic/Header';
import Footer from './views/generic/Footer';


import dashboardPage from './pages/Dashboard';
import todoPage from './pages/ToDo';
import calendarPage from './pages/Calendar';

const layout = new Layout;
layout.displayLayout();

const sidebar = new Sidebar;
sidebar.displaySidebar();


const header = new Header;
header.displayHeader();

const footer = new Footer;
footer.displayFooter();


function removeHash () { 
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

// const Router = [
//     {
//         path: '/',
//         name: "Dahsboard"
//     },
//     {
//         path: '/todo',
//         name: "To-Do"
//     },
//     {
//         path: '/calendar',
//         name: "Calendar"
//     },
//     {
//         path: '/github/my-profile',
//         name: "My Profile"
//     },
//     {
//         path: '/github/stats',
//         name: "Stats"
//     },
//     {
//         path: '/github/search-user',
//         name: "Search User"
//     }
// ]




window.addEventListener("DOMContentLoaded", function() {
    // The value gets the file/folder name so it basically gets its content
    let routes = {
        '/dashboard': dashboardPage,
        '/todo': todoPage,
        '/calendar': calendarPage,
    };

    // Toggle Sidebar
    const toggleSidebarBtn = document.querySelector('.main-sidebar__toggle-sidebar');
    toggleSidebarBtn.addEventListener('click', sidebar.toggleSidebar);



    window.addEventListener('popstate', function(e) {
        console.log('URL has changed: ' + window.location)

        // try to render Router[pathName] inside that content div.  If its null u will load the 404.js page
        let mainView = document.querySelector('.main-container');
        mainView.innerHTML = routes[window.location.pathname];
        

        console.log(window.location.pathname)

        //  also need a browser history to be maintained
        
    });

    
    
    




















});

// document.addEventListener("DOMContentLoaded", function() {
//     var Router = function (name, routes) {
//         return {
//             name: name,
//             routes: routes
//         }
//     };

//     var view = document.getElementsByClassName('main-container');

//     var myRouter = new Router('myRouter', [
//         {
//             path: '/',
//             name: "Dahsboard"
//         },
//         {
//             path: '/todo',
//             name: "To-Do"
//         },
//         {
//             path: '/calendar',
//             name: "Calendar"
//         }
//     ]);
//     var currentPath = window.location.pathname;
//     if (currentPath === '/') {
//         view.innerHTML = "You are on the Dashboard";
//         console.log(view);
//     } else {
//         view.innerHTML = "you are not";
//     }


// });