import fontawesome from '@fortawesome/fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(regular)
fontawesome.library.add(solid)
fontawesome.library.add(brands)



import '../styles/index.scss';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Footer from './components/footer';
import Router from './lib/router';
 

new Router().listen();
 