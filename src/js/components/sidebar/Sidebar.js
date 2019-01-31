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
        <aside data-ref="main-sidebar" class="main-sidebar">
            <div class="main-sidebar__inner">

                <div class="main-sidebar__logo-brand">
                    <div class="main-sidebar__logo">
                        <i class="main-sidebar__logo-icon fas fa-fire"></i>
                        <span class="main-sidebar__logo-text">Hobo</span>
                    </div>

                    <button data-js="toggle-sidebar" class="main-sidebar__toggle-sidebar" onClick="sidebar.onEvent()">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>

                <div class="main-sidebar__wrapper">

                <ul class="nav-main">
                    <li class="nav-group-heading">
                        <span>Applications</span>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#dashboard">
                            <i class="nav-link-icon fas fa-rocket"></i>
                            <span class="nav-link-title">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#todo">
                            <i class="nav-link-icon far fa-calendar-check"></i>
                            <span class="nav-link-title">To-Do</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#calendar">
                            <i class="nav-link-icon fas fa-calendar"></i>
                            <span class="nav-link-title">Calendar</span>
                        </a>
                    </li>
                    <li class="nav-group-heading">
                        <span>Connected APIs</span>
                    </li>
                    <li class="nav-item nav-has-dropdown">
                        <span class="nav-link">
                            <i class="nav-link-icon fab fa-github"></i>
                            <span class="nav-link-title">GitHub</span>
                            <i class="nav-link-carrot fas fa-angle-down"></i>
                        </span>
                        <div class="nav-sub-list-collapseee">
                        <ul class="nav-sub-list">
                            <li class="nav-item"><a class="nav-link active" href="#github/profile"><span class="nav-link-title">My Profile</span></a></li>
                            <li class="nav-item"><a class="nav-link" href="#github/stats"><span class="nav-link-title">Stats</span></a></li>
                            <li class="nav-item"><a class="nav-link" href="#github/search-user"><span class="nav-link-title">Search User</span></a></li>
                        </ul>
                        </div>
                    </li>
                    <li class="nav-item nav-has-dropdown">
                        <span class="nav-link nav-link-mother">
                            <i class="nav-link-icon fab fa-twitter"></i>
                            <span class="nav-link-title">Twitter</span>
                            <i class="nav-link-carrot fas fa-angle-down"></i>
                        </span>
                        <ul class="nav-sub-list">
                            <li><a class="nav-link" href="#twitter/profile"><span class="nav-link-title">My Profile</span></a></li>
                            <li><a class="nav-link" href="#twitter/tweets"><span class="nav-link-title">Get tweets</span></a></li>
                        </ul>
                    </li>
                    <li class="nav-group-heading">
                        <span>Develop</span>
                    </li>
                    <li class="nav-item nav-has-dropdown">
                        <span class="nav-link nav-link-mother">
                            <i class="nav-link-icon fab fa-uikit"></i>
                            <span class="nav-link-title">UI Elements</span>
                            <i class="nav-link-carrot fas fa-angle-down"></i>
                        </span>
                        <ul class="nav-sub-list">
                            <li><a class="nav-link" href="#develop/typography"><span class="nav-link-title">Typography</span></a></li>
                            <li><a class="nav-link" href="#develop/buttons"><span class="nav-link-title">Buttons</span></a></li>
                            <li><a class="nav-link" href="#develop/forms"><span class="nav-link-title">Forms</span></a></li>
                        </ul>
                    </li>
                    <li class="nav-group-heading">
                        <span>Custom Functions</span>
                    </li>
                    <li class="nav-item">
                        <span class="nav-link nav-link-mother">
                            <i class="nav-link-icon fas fa-cogs"></i>
                            <span class="nav-link-title">Settings</span>
                            <i class="nav-link-carrot fas fa-angle-down"></i>
                        </span>
                        <ul class="nav-sub-list">
                            <li><a class="nav-link" href=""><span class="nav-link-title">General</span></a></li>
                            <li><a class="nav-link" href=""><span class="nav-link-title">Theme</span></a></li>
                        </ul>
                    </li>
                </ul>
            </div>          
        </aside>  
        `;
    }

}

export default Sidebar;