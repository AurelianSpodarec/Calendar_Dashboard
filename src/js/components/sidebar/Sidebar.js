import Component from "../component/index";

class Sidebar extends Component {
    constructor(props) {
        super(props); 
        this.onEvent = this.onEvent.bind(this);
        this.setSubscriber("sidebar", this.onEvent);
    }
    
    onEvent(event) {
        event.preventDefault();
        console.log(this.refs);
    }

    render() {
        return /*html*/`
        <aside data-ref="sidebar-element" class="sidebar">
        <div class="sidebar__inner">

            <div class="sidebar__header">
                <a class="sidebar__logo-container" href="#dashboard" title="Hobo">
                    <i class="sidebar__logo-icon fas fa-fire"></i>
                    <span class="sidebar__logo-text">Hobo</span>
                </a>
                <button data-js="toggle-sidebar" class="sidebar__toggle-sidebar" onClick="sidebar.onEvent()">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            
            <nav class="menu">
            <ul class="menu__list">
                <li class="menu__heading-item">
                    <span class="menu__heading-title">Applications</span>
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
                <li class="menu__heading-item">
                    <span class="menu__heading-title">Connected APIs</span>
                </li>
                <li class="menu__item menu__has-dropdown is-expanded">
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
                <li class="menu__item menu__has-dropdown">
                    <span class="menu__link">
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
                <li class="menu__heading-item">
                    <span class="menu__heading-title">Develop</span>
                </li>
                <li class="menu__item menu__has-dropdown">
                    <span class="menu__link">
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
                <li class="menu__heading-item">
                    <span class="menu__heading-title">Custom Functions</span>
                </li>
                <li class="menu__item">
                    <span class="menu__link">
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
            </nav>

        </div>          
        </aside>  
        `;
    }

}

export default Sidebar;