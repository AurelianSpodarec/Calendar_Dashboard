import Component from "../../../lib/core/Component";

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    toggleSidebar() {
        const sidebar = document.querySelector('[data-js="main-sidebar"]');
        const mainPanel = document.querySelector('[data-js="main-panel"]');
        const mainHeader = document.querySelector('[data-js="main-header"]');
    
        sidebar.classList.toggle('is-folded');
        mainPanel.classList.toggle('is-toggle');
        mainHeader.classList.toggle('is-toggle');
    }

    render() {
        const sidebar = `
            <div class="main-sidebar__inner">

                <!-- <div class="main-sidebar__background" style="background-image: url(https://demos.creative-tim.com/light-bootstrap-dashboard-react/static/media/sidebar-3.34535b95.jpg);"></div> -->

                <!-- <div class="main-sidebar__header">
                </div> -->

                <div class="main-sidebar__logo-brand">
                    <div class="main-sidebar__logo">
                        <i class="main-sidebar__logo-icon fas fa-fire"></i>
                        <span class="main-sidebar__logo-text">Hobo</span>
                    </div>

                    <button data-js="toggle-sidebar" class="main-sidebar__toggle-sidebar"><i class="fas fa-bars"></i></button>
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
                    <li class="nav-item nav-item-mother nav-has-dropdown">
                        <a class="nav-link nav-link-mother" href="#">
                            <i class="nav-link-icon fab fa-github"></i>
                            <span class="nav-link-title">GitHub</span>
                            <i class="nav-link-carrot fas fa-angle-down"></i>
                        </a>
                        <div class="nav-sub-list-collapse">
                        <ul class="nav-sub-list">
                            <li class="nav-item"><a class="nav-link active" href="#github/profile"><span class="nav-link-title">My Profile</span></a></li>
                            <li class="nav-item"><a class="nav-link" href="#github/stats"><span class="nav-link-title">Stats</span></a></li>
                            <li class="nav-item"><a class="nav-link" href="#github/search-user"><span class="nav-link-title">Search User</span></a></li>
                        </ul>
                        </div>
                    </li>
                    <li class="nav-item nav-item-mother nav-has-dropdown">
                        <a class="nav-link nav-link-mother" href="#">
                            <i class="nav-link-icon fab fa-twitter"></i>
                            <span class="nav-link-title">Twitter</span>
                            <i class="nav-link-carrot fas fa-angle-down"></i>
                        </a>
                        <ul class="nav-sub-list">
                            <li><a class="nav-link" href="#twitter/profile"><span class="nav-link-title">My Profile</span></a></li>
                            <li><a class="nav-link" href="#twitter/tweets"><span class="nav-link-title">Get tweets</span></a></li>
                        </ul>
                    </li>
                    <li class="nav-group-heading">
                        <span>Develop</span>
                    </li>
                    <li class="nav-item nav-item-mother nav-has-dropdown">
                        <a class="nav-link nav-link-mother" href="#">
                            <i class="nav-link-icon fab fa-uikit"></i>
                            <span class="nav-link-title">UI Elements</span>
                            <i class="nav-link-carrot fas fa-angle-down"></i>
                        </a>
                        <ul class="nav-sub-list">
                            <li><a class="nav-link" href=""><span class="nav-link-title">Typography</span></a></li>
                            <li><a class="nav-link" href=""><span class="nav-link-title">Buttons</span></a></li>
                            <li><a class="nav-link" href=""><span class="nav-link-title">Forms</span></a></li>
                        </ul>
                    </li>
                    <li class="nav-group-heading">
                        <span>Custom Functions</span>
                    </li>
                    <li class="nav-item nav-item-mother">
                        <a class="nav-link nav-link-mother" href="#">
                            <i class="nav-link-icon fas fa-cogs"></i>
                            <span class="nav-link-title">Settings</span>
                            <i class="nav-link-carrot fas fa-angle-down"></i>
                        </a>
                        <ul class="nav-sub-list">
                            <li><a class="nav-link" href=""><span class="nav-link-title">General</span></a></li>
                            <li><a class="nav-link" href=""><span class="nav-link-title">Theme</span></a></li>
                        </ul>
                    </li>
                </ul>
            </div>            
        `;
        var mainSidebar = document.querySelector('[data-js="main-sidebar"]');
        mainSidebar.innerHTML = sidebar;
    }

}

export default Sidebar;