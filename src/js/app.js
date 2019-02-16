import fontawesome from '@fortawesome/fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(regular)
fontawesome.library.add(solid)
fontawesome.library.add(brands)

import store from "#lib/store"

import '../styles/index.scss';

import Router from './lib/router';



 

import Layout from './views/Layout';
import createElement from './lib/createElement';


const layoutElement = document.querySelector("[data-js=wrapper-element]");
const layout = new Layout();
const layoutNode = createElement(layout);


window.layout = layout;
layoutElement.parentNode.replaceChild(layoutNode, layoutElement);

new Router().listen();