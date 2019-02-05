import Component from "../../../component";

class Search extends Component {
    constructor(props) {
        super(props);
        // this.openSearch = this.openSearch.bind(this);
        // this.closeSearch = this.closeSearch.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    openSearch(event) {
        event.preventDefault();
        this.refs.headerSearchElement.classList.add("is-active");
    }

    closeSearch(event) {
        event.preventDefault();
        this.refs.headerSearchElement.classList.remove("is-active");
    }

    onSearch(event) {
        event.preventDefault();
        alert("Search");
        // // Get current state
        // if() {

        // } else {

        // }
    }

    render() {
        return /*html*/`
        <form data-ref="headerSearchElement" class="header__search-container" onsubmit="search.onSearch(event)">
            <div class="header__search-bar-content">
                <input name="searchInput" class="header__search-input" placeholder="Search" />
                <button class="header__search-close-btn" onClick="search.closeSearch(event)" type="button">
                    <i class="header__search-close-icon fas fa-times"></i>
                </button>
            </div>
        </form>
        `;
    }

}

export default Search;