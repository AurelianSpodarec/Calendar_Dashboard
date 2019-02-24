import fontawesome from '@fortawesome/fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

import '../styles/index.scss';

import Router from './lib/router';

import Layout from './views/Layout';
import createElement from './lib/createElement';


fontawesome.library.add(regular)
fontawesome.library.add(solid)
fontawesome.library.add(brands)

const layoutElement = document.querySelector("[data-js=wrapper-element]");
const layout = new Layout();
const layoutNode = createElement(layout);


window.layout = layout;
layoutElement.parentNode.replaceChild(layoutNode, layoutElement);

new Router().listen();