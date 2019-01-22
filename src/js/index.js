import fontawesome from '@fortawesome/fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(regular)
fontawesome.library.add(solid)
fontawesome.library.add(brands)

import '../styles/index.scss';

import Layout from './views/Layout';
import Router from './lib/core/Router';



const layout = new Layout;
layout.render();



window.addEventListener("DOMContentLoaded", function() {
    

    const router = new Router;
    router.onHashChange.call(router)
  
    /////////////////////////////////////
    // Toggle Sidebar
    ///////////////////////////////////
    // const toggleSidebarBtn = document.querySelector('[data-js="toggle-sidebar"]');
    // toggleSidebarBtn.addEventListener('click', sidebar.toggleSidebar)



});