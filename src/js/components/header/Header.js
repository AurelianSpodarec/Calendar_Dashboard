import Component from "../component";

class Header extends Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this);
        // this.openSearch = this.openSearch.bind(this);
        // this.setSubscriber("header", this.onEvent);
    }
    
    openSearch(event) {
        event.preventDefault();
        console.log("Open Search"); 
        this.refs.headerSearchContainer.classList.add("is-expanded");
    }

    closeSearch(event) {
        event.preventDefault();
        this.refs.headerSearchContainer.classList.remove("is-expanded");
    }

    onSearch(event) {
        event.preventDefault();
        alert("Search");
    }

    onEvent(state, action) {
        // if (action.type === )
    }

    render() {
        return /*html*/`
        <header class="header">
        <div class="header__outer">


            <div class="header__item-list">
                <button class="header__item header__item--special header__toggle-view-btn" data-ref="toggleSidebarMobile" type="button">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="header__item">
                    Weather -10
                </div>
                <button class="header__item header__item--pull-right header__item--special header__search-btn" onClick="header.openSearch(event)">
                    <i class="fas fa-search"></i>
                </button>
                <div class="header__item header__item--special">
                    <img class="header__user-avatar" alt="@AurelianSpodarec" src="https://avatars0.githubusercontent.com/u/10155855?s=40&amp;v=4">
                    <span class="header__user-name">Aurelian Spodarec</span>
                    <i class="fas fa-angle-down"></i>
                </div>
            </div>

            <div class="header__search-container" data-ref="headerSearchContainer">
            <form onsubmit="header.onSearch(event)">
                <div class="header__search-bar-content">
                    <input name="search" class="header__search-input" placeholder="Search" />
                    <button class="header__search-close-btn" onClick="header.closeSearch(event)" type="button">
                        <i class="header__search-close-icon fas fa-times"></i>
                    </button>
                </div>
            </form>
            </div>
                 

        </div>
        </header>
        `;
    }
}

export default Header;