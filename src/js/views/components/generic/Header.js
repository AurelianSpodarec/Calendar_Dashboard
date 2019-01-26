import Component from "../../../lib/core/Component";

class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const view = /*html*/`
        <div class="main-header__outer">

            <button data-js="toggle-sidebar-mobile" class="main-header__sidebar-toggle-mobile main-header__item">
                <i class="fas fa-bars"></i>
            </button>
                
            <div class="main-header__search-bar-wrap">
            <div class="main-header__search-bar-wrap-inner">
        <div class="main-header__search-bar-content">
                <input class="main-header__search-bar" placeholder="Search..." />
                 
                    <i class=" main-header__search-bar-close fas fa-bars"></i>
                 
    </div>
            </div>
            </div>

            <div class="main-header__left">
                
            </div>

            <div class="main-header__right">
                <div class="main-header__item">
                    <i class="fas fa-search"></i>
                </div>
                <div class="main-header__item">
                    <img class="main-header__user-avatar" alt="@AurelianSpodarec" src="https://avatars0.githubusercontent.com/u/10155855?s=40&amp;v=4">
                    <span class="main-header__user-name">Aurelian Spodarec</span>
                    <i class="fas fa-angle-down"></i>
                </div>
            </div>
        </div>
        `
        return view;
        
    }
}

export default Header;