import Component from "../lib/core/Component";

import Header from "./components/generic/Header";
import Footer from "./components/generic/Footer";
import Sidebar from "./components/generic/Sidebar";
import Router from "../lib/core/Router";

class Layout extends Component{

    constructor() {
        super()
        
        this.state = {
            hamburgerToggle: false
        }

        this.regions = {
            'header': '[data-js="main-header"]',
            'sidebar': '[data-js="main-sidebar"]',
            'content': '[data-js="main-container"]',
            'footer': '[data-js="main-footer"]'
        };

        this.login = /*html*/`
            <div>Login</div>
        `;

        this.template = /*html*/`
            <div class="scrollbox" tabindex="0">

                <main class="main-wrapper">
                    <aside data-js="main-sidebar" class="main-sidebar ${this.state.hamburgerToggle ? 'is-folded' : '' }"></aside>

                    <div data-js="main-panel" class="main-panel ${this.state.hamburgerToggle ? 'is-toggle' : '' }">
                        <header data-js="main-header" class="main-header ${this.state.hamburgerToggle ? 'is-toggle' : '' }"></header>
                        <!-- If GitHub == true, add: main-container--github -->
                        <section data-js="main-container" class="main-container--github"></section>

                        <footer data-js="main-footer" class="main-footer"></footer>
                    </div>
                    
                </main>

            </div>
        `;

        this.render();
    }

    toggleHamburger() {
       this.state.toggleHamburger = true
    }
    
    show(region, view) {
      var el = document.querySelector(this.regions[region]);
      el.innerHTML = view.render();
    }
    
    render() {
        var app = document.querySelector('[data-js="app"]');
        app.innerHTML = this.template;
        let header = new Header();
        let sidebar = new Sidebar();
        let footer = new Footer();
        this.show('header', header); 
        this.show('sidebar', sidebar); 
        this.show('footer', footer); 

        new Router();
        
    }
    
  }

export default Layout;