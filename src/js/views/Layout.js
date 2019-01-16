
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
            <aside id="main-sidebar" class="main-sidebar is-folded"></aside>

            <main id="main-panel" class="main-panel is-toggle">
                <header id="main-header" class="main-header is-toggle"></header>

                <section class="main-container">
                    sd<br><br><br><br>dsdsdsdds
                </section>

                <footer id="main-footer" class="main-footer"></footer>
            </main>
        </div>
        `;
    }
}

