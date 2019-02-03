import Component from "../../../component";

class Search extends Component {
    constructor(props) {
        super(props);
        this.closeSearch = this.closeSearch.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    openSearch(event) {
        event.preventDefault();
        console.log("Open Search"); 
        this.children.headerSearchContainer.classList.add("is-expanded");
    }

    closeSearch(event) {
        event.preventDefault();
        this.refs.headerSearchContainer.classList.remove("is-expanded");
    }

    onSearch(event) {
        event.preventDefault();
        alert("Search");
    }

    render() {
        return /*html*/`
        <div class="header__search-container">
        <form onsubmit="search.onSearch(event)">
            <div class="header__search-bar-content">
                <input name="search" class="header__search-input" placeholder="Search" />
                <button class="header__search-close-btn" onClick="search.closeSearch(event)" type="button">
                    <i class="header__search-close-icon fas fa-times"></i>
                </button>
            </div>
        </form>
        </div>
        `;
    }

}

export default Search;