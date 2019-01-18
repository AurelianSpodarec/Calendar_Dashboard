
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
            <aside data-js="main-sidebar" class="main-sidebar"></aside>

            <main data-js="main-panel" class="main-panel">
                <header data-js="main-header" class="main-header"></header>

                <section data-js="main-container" class="main-container">
                    sd<br><br><br><br>dsdsdsdds
                </section>

                <footer data-js="main-footer" class="main-footer"></footer>
            </main>
        </div>
        `;
    }
}

