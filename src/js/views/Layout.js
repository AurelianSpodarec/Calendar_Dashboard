
export default class Layout {
    constructor() {
        this.layout = document.getElementById('app');
    }

    clearLayout() {
        this.layout.innerHTML = "";
    }

    displayLayout() {
        this.layout.innerHTML = `
            <div class="main-wrapper">
            
            <div class="settings-widget"><i class="fas fa-cog"></i></div>

            <aside id="main-sidebar" class="main-sidebar" data-color="charade" data-image="background-image: url(https://demos.creative-tim.com/light-bootstrap-dashboard-react/static/media/sidebar-3.34535b95.jpg);">

            </aside>


            <main class="main-panel">
                <header class="main-header">
                    <div class="main-header__left">
                        SAVINGS
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
                </header>
                <div class="main-container">
                    sd<br><br><br><br>dsdsdsdds
                </div>
                <footer class="main-footer">
                    
                
                    <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-lg-4" href="https://github.com">
                        <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </a>


                    <div>
                        © 2019 made with  by Binar Code & Creative Tim for a better web.
                    </div>

                </footer>
            </main>
        </div>
        `;
    }
}

