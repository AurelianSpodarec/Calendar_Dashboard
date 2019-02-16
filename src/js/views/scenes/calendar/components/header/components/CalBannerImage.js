import Component from "#components/component";

class CalBannerImage extends Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this);
        this.setSubscriber("CalBannerImage", this.onEvent);
    }
 
    renderBanner() {
        if(this.getStoreState().calendar.currentMonthIndex === 11 ||
            this.getStoreState().calendar.currentMonthIndex === 0 || 
            this.getStoreState().calendar.currentMonthIndex === 1) {

            this.refs.bannerImg.style.backgroundImage = "url('https://c8.alamy.com/comp/PTB79P/vector-banner-blue-winter-background-with-ice-and-snow-PTB79P.jpg')";
        } else if (this.getStoreState().calendar.currentMonthIndex === 2 ||
            this.getStoreState().calendar.currentMonthIndex === 3 || 
            this.getStoreState().calendar.currentMonthIndex === 4) {

            this.refs.bannerImg.style.backgroundImage = "url('https://3.bp.blogspot.com/-YOTSOEh6API/XFeB3Zhj5KI/AAAAAAAAFhk/2u2qQ2QMWckkDz4yRnDeBRgaR7C98QPawCHMYCw/s1600/spring-painting-%25E2%259D%25A4-4k-hd-desktop-wallpaper-for-4k-ultra-hd-tv.jpg')";
        } else if (this.getStoreState().calendar.currentMonthIndex === 5 ||
            this.getStoreState().calendar.currentMonthIndex === 6 || 
            this.getStoreState().calendar.currentMonthIndex === 7) {

            this.refs.bannerImg.style.backgroundImage = "url('https://childrenstree.org/wp-content/uploads/2014/03/pink-flowers-summer-wallpapers-hd-wallpaper-wallpaper-nature-landscape-photo-summer-wallpaper-1024x640.jpg')";
        } else if(this.getStoreState().calendar.currentMonthIndex === 8 ||
            this.getStoreState().calendar.currentMonthIndex === 9 || 
            this.getStoreState().calendar.currentMonthIndex === 10) {
            this.refs.bannerImg.style.backgroundImage = "url('https://i.ytimg.com/vi/l5r6stay7ls/maxresdefault.jpg')";
        }
    }

    onEvent(state, action) {
        this.renderBanner();
    }

    onCreated() {
       this.renderBanner();
    }

    /*

        Winter 
        Spring 
        Summer 
        Autumn 



    */

    render() {
        return /*html*/`
            <div data-ref="bannerImg" class="cal__header-banner"> </div>
        `;
    }
}

export default CalBannerImage;