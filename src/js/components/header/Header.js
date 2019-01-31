import Component from "../component/index";

class Header extends Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this);
        this.openSearchInput = this.openSearchInput.bind(this);
        // this.setSubscriber("header", this.onEvent);
    }
    
    openSearchInput(event) {
        event.preventDefault();
        console.log("Open Search");
        // console.log(Object.keys(this.refs));
        this.refs.searchBarContent.classList.add("YESSSSSSSSSSSSs");
    }

    closeSearchInput(event) {
        console.log("Close Search");
    }

    onSearch(event) {
        event.preventDefault();
        console.log("Search");
    }

    onEvent(state, action) {
        // if (action.type === )
    }

    render() {
        return /*html*/`
        <header class="main-header">
            <div class="main-header__outer">

                <button data-js="toggle-sidebar-mobile" class="main-header__sidebar-toggle-mobile main-header__item">
                <i class="fas fa-bars"></i>
                </button>
                    
                <div data-ref="searchBarContent" class="main-header__search-bar-wrap">
                <div class="main-header__search-bar-wrap-inner">

                    <form onsubmit="header.onSearch(event)" class="main-header__search-bar-content">
                        <input class="main-header__search-bar" placeholder="Search..." />
                        <i class="main-header__search-bar-close fas fa-times" onClick="header.closeSearchInput(event)"></i>
                    </form>

                </div>
                </div>

                <div class="main-header__left">
                <div class="main-header__item">
                    Weather -10
                </div>
                </div>

                <div class="main-header__right">
                    <button class="main-header__item" onClick="header.openSearchInput(event)">
                        <i class="fas fa-search"></i>
                    </button>
                    <div class="main-header__item">
                        <img class="main-header__user-avatar" alt="@AurelianSpodarec" src="https://avatars0.githubusercontent.com/u/10155855?s=40&amp;v=4">
                        <span class="main-header__user-name">Aurelian Spodarec</span>
                        <i class="fas fa-angle-down"></i>
                    </div>
                </div>
            </div>
        </header>
        `;
    }
}

export default Header;