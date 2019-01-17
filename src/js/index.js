import fontawesome from '@fortawesome/fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(regular)
fontawesome.library.add(solid)
fontawesome.library.add(brands)

import '../styles/index.scss';
import Layout from './views/Layout';
import Sidebar from './views/components/generic/Sidebar';
import Header from './views/components/generic/Header';
import Footer from './views/components/generic/Footer';


import dashboardPage from './views/scenes/Dashboard';
import todoPage from './views/scenes/ToDo';
import calendarPage from './views/scenes/Calendar';
import error404Page from './views/scenes/Error404';

const layout = new Layout;
layout.displayLayout();

const sidebar = new Sidebar;
sidebar.displaySidebar();


const header = new Header;
header.displayHeader();

const footer = new Footer;
footer.displayFooter();




window.addEventListener("DOMContentLoaded", function() {

 

    const routes = [
        {
            component: dashboardPage,
            path: '#/dashboard'
        },
        {
            component: todoPage,
            path: '#/todo'
        },
        {
            component: calendarPage,
            path: '#/calendar'
        },
        {
            component: error404Page,
            path: '#/404'
        }
    ]



    const getRoute = location => {
        let filteredRoutes = routes.filter(obj => obj.path === location);
        // filderedRoutes should exactly be 1 element long(which is the object), if not, we do not have a match
        return filteredRoutes ? filteredRoutes[0].component : error404Page;
    }

    window.addEventListener('popstate', function(e) {
        console.log('URL has changed: ' + window.location)

        // try to render Router[pathName] inside that content div.  If its null u will load the 404.js page
        let mainView = document.querySelector('.main-container');
        console.log(mainView.innerHTML = getRoute(window.location.hash));
        console.log('Did you get the display?')
        
        // removeHash(window.location.hash)

        // console.log(window.location)

        //  also need a browser history to be maintained
        
    });
    



    // Toggle Sidebar
    const toggleSidebarBtn = document.querySelector('.main-sidebar__toggle-sidebar');
    toggleSidebarBtn.addEventListener('click', sidebar.toggleSidebar);





















});