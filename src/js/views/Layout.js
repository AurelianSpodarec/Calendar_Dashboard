import Component from "../components/component/index";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";

// import Header from "./components/generic/header/Header";
// import Footer from "./components/generic/footer/Footer";
// import Sidebar from "./components/generic/sidebar/Sidebar";
import Router from "../lib/router/Router";


class Layout extends Component{
    constructor(props) {
        super(props)
        this.onEvent = this.onEvent.bind(this);
        // this.setSubscriber("layout", this.onEvent);

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
            <main class="main-wrapper">
                <aside data-js="main-sidebar" class="main-sidebar ${this.state.hamburgerToggle ? 'is-folded' : '' }"></aside>

                <div data-js="main-panel" class="main-panel ${this.state.hamburgerToggle ? 'is-toggle' : '' }">
                    <header data-js="main-header" class="main-header ${this.state.hamburgerToggle ? 'is-toggle' : '' }"></header>
                    <!-- If GitHub == true, add: main-container--github -->
                    <section data-js="main-container" class="main-container--github"></section>

                    <footer data-js="main-footer" class="main-footer"></footer>
                </div>
                
            </main>
        `;

        this.render();
    }

    onEvent(state, action) {
        console.log('Layout Event Yay');
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