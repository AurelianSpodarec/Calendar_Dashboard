import Component from "../component/index";

class Sidebar extends Component {
    constructor(props) {
        super(props); 
    }
    
    onEvent(event) {
        event.preventDefault();
        console.log(this.refs);
    }

    render() {
        return /*html*/`
        <aside data-ref="sidebar-element" class="sidebar">
        <div class="sidebar__inner">


            <div class="sidebar__logo-brand">
                <div class="sidebar__logo">
                    <i class="sidebar__logo-icon fas fa-fire"></i>
                    <span class="sidebar__logo-text">Hobo</span>
                </div>

                <button data-js="toggle-sidebar" class="sidebar__toggle-sidebar" onClick="sidebar.onEvent()">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            

            <div class="sidebar__wrapper">
            <ul class="menu">
                <li class="menu__section-heading">
                    <span>Applications</span>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="#dashboard">
                        <i class="menu__icon fas fa-rocket"></i>
                        <span class="menu__text">Dashboard</span>
                    </a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="#todo">
                        <i class="menu__icon far fa-calendar-check"></i>
                        <span class="menu__text">To-Do</span>
                    </a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="#calendar">
                        <i class="menu__icon fas fa-calendar"></i>
                        <span class="menu__text">Calendar</span>
                    </a>
                </li>
                <li class="menu__section-heading">
                    <span>Connected APIs</span>
                </li>
                <li class="menu__item is-dropdown">
                    <span class="menu__link">
                        <i class="menu__icon fab fa-github"></i>
                        <span class="menu__text">GitHub</span>
                        <i class="menu__caret fas fa-angle-down"></i>
                    </span>
                    <div class="menu__dropdown-collapse is-expanded">
                    <ul class="menu__dropdown">
                        <li class="menu__item"><a class="menu__link is-active" href="#github/profile"><span class="menu__text">My Profile</span></a></li>
                        <li class="menu__item"><a class="menu__link" href="#github/stats"><span class="menu__text">Stats</span></a></li>
                        <li class="menu__item"><a class="menu__link" href="#github/search-user"><span class="menu__text">Search User</span></a></li>
                    </ul>
                    </div>
                </li>
                <li class="menu__item nav-has-dropdown">
                    <span class="menu__link nav-link-mother">
                        <i class="menu__icon fab fa-twitter"></i>
                        <span class="menu__text">Twitter</span>
                        <i class="menu__caret fas fa-angle-down"></i>
                    </span>
                    <div class="menu__dropdown-collapse">
                    <ul class="menu__dropdown">
                        <li><a class="menu__link" href="#twitter/profile"><span class="menu__text">My Profile</span></a></li>
                        <li><a class="menu__link" href="#twitter/tweets"><span class="menu__text">Get tweets</span></a></li>
                    </ul>
                    </div>
                </li>
                <li class="menu__section-heading">
                    <span>Develop</span>
                </li>
                <li class="menu__item nav-has-dropdown">
                    <span class="menu__link nav-link-mother">
                        <i class="menu__icon fab fa-uikit"></i>
                        <span class="menu__text">UI Elements</span>
                        <i class="menu__caret fas fa-angle-down"></i>
                    </span>
                    <div class="menu__dropdown-collapse">
                    <ul class="menu__dropdown">
                        <li><a class="menu__link" href="#develop/typography"><span class="menu__text">Typography</span></a></li>
                        <li><a class="menu__link" href="#develop/buttons"><span class="menu__text">Buttons</span></a></li>
                        <li><a class="menu__link" href="#develop/forms"><span class="menu__text">Forms</span></a></li>
                    </ul>
                    </div>
                </li>
                <li class="menu__section-heading">
                    <span>Custom Functions</span>
                </li>
                <li class="menu__item">
                    <span class="menu__link nav-link-mother">
                        <i class="menu__icon fas fa-cogs"></i>
                        <span class="menu__text">Settings</span>
                        <i class="menu__caret fas fa-angle-down"></i>
                    </span>
                    <div class="menu__dropdown-collapse">
                    <ul class="menu__dropdown">
                        <li><a class="menu__link" href=""><span class="menu__text">General</span></a></li>
                        <li><a class="menu__link" href=""><span class="menu__text">Theme</span></a></li>
                    </ul>
                    </div>
                </li>
            </ul>

        </div>          
        </aside>  
        `;
    }

}

export default Sidebar;