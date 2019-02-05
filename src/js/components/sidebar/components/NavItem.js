import Component from "../../component";

class NavItem extends Component {
    constructor() {

    }

    renderMenuSeparator() {

    }

    renderSubmenu() {
        return /*html*/`
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
        `
    }

    renderNavItem() {
        return /*html*/`
            <li class="nav-group-heading">
                <span>Applications</span>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#dashboard">
                    <i class="nav-link-icon fas fa-rocket"></i>
                    <span class="nav-link-title">Dashboard</span>
                </a>
            </li>
        `;
    }

    menuParser() {
        //create bunch of if statements and include the right data, pare object
    }

    render() {
        return /*html*/`
            <ul class="nav-main">
                <!-- Mold the objects and render them here, create bunch of statements -->
            </ul>
        `;
    }

}