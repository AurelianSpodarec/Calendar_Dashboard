window.toggleSidebar = () => {
    const sidebar = document.getElementById('main-sidebar');
    const mainPanel = document.getElementById('main-panel');
    const mainHeader = document.getElementById('main-header');

    sidebar.classList.toggle('is-folded');
    mainPanel.classList.toggle('is-toggle');
    mainHeader.classList.toggle('is-toggle');
}
