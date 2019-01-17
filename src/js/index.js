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


const layout = new Layout;
layout.displayLayout();

const sidebar = new Sidebar;
sidebar.displaySidebar();

const header = new Header;
header.displayHeader();

const footer = new Footer;
footer.displayFooter();


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