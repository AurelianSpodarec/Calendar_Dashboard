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


import Router from './lib/core/Router';

const layout = new Layout;
layout.render();

const sidebar = new Sidebar;
sidebar.render();

const header = new Header;
header.render();

const footer = new Footer;
footer.render();




window.addEventListener("DOMContentLoaded", function() {

    const router = new Router;
    router.onHashChange.call(router)
 
    /////////////////////////////////////
    // Routing
    ///////////////////////////////////
    // const getRoute = location => {
    //     let filteredRoutes = routes.filter(obj => obj.path === location);console.log(filteredRoutes);
    //     return filteredRoutes ? filteredRoutes[0].scene : Error404;
        
    // }

    // window.addEventListener('popstate', function(e) {
    //     let mainView = document.querySelector('[data-js="main-container"]');
    //     mainView.innerHTML = getRoute(window.location.hash);
    //     // mainView.appendChild(component.render()
    // });
    

    /////////////////////////////////////
    // Toggle Sidebar
    ///////////////////////////////////
    const toggleSidebarBtn = document.querySelector('[data-js="toggle-sidebar"]');
    toggleSidebarBtn.addEventListener('click', sidebar.toggleSidebar)



});