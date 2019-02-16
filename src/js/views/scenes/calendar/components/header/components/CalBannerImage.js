import Component from "#components/component";

class CalBannerImage extends Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this);
        this.setSubscriber("CalBannerImage", this.onEvent);
    }

    renderBanner() {
        const {currentMonthIndex} = this.getStoreState().calendar;
        let imageUrl;

        switch(currentMonthIndex) {
            case 11:
            case 0:
            case 1: {
                imageUrl = "https://c8.alamy.com/comp/PTB79P/vector-banner-blue-winter-background-with-ice-and-snow-PTB79P.jpg";
                break;
            }
            case 2:
            case 3:
            case 4: {
                imageUrl = "https://3.bp.blogspot.com/-YOTSOEh6API/XFeB3Zhj5KI/AAAAAAAAFhk/2u2qQ2QMWckkDz4yRnDeBRgaR7C98QPawCHMYCw/s1600/spring-painting-%25E2%259D%25A4-4k-hd-desktop-wallpaper-for-4k-ultra-hd-tv.jpg";
                break;
            }
            case 5:
            case 6:
            case 7: {
                imageUrl = "https://childrenstree.org/wp-content/uploads/2014/03/pink-flowers-summer-wallpapers-hd-wallpaper-wallpaper-nature-landscape-photo-summer-wallpaper-1024x640.jpg";
                break;
            }
            case 8:
            case 9:
            case 10: {
                imageUrl = "https://i.ytimg.com/vi/l5r6stay7ls/maxresdefault.jpg";
                break;
            }
        }

        this.refs.bannerImg.style.backgroundImage = `url('${imageUrl}')`;
    }

    onEvent(state, action) {
        this.renderBanner();
    }

    onCreated() {
       this.renderBanner();
    }

    render() {
        return /*html*/`
            <div data-ref="bannerImg" class="cal__header-banner"> </div>
        `;
    }
}

export default CalBannerImage;