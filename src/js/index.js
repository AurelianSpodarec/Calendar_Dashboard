import fontawesome from '@fortawesome/fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(regular)
fontawesome.library.add(solid)
fontawesome.library.add(brands)

import '../styles/index.scss';

import Layout from './views/Layout';
let layout = new Layout;



// function removeLocationHash(){
//     var noHashURL = window.location.href.replace(/#.*$/, '');
//     window.history.replaceState('', document.title, noHashURL) 
// }
// window.addEventListener("popstate", function(event){
//     removeLocationHash();
// });
// window.addEventListener("hashchange", function(event){
//     event.preventDefault();
//     removeLocationHash();
// });
// window.addEventListener("load", function(){
//     removeLocationHash();
// });