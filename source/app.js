class Application {
    constructor() {
        this.menuOverlay = document.getElementById('menu-overlay')
    }

    showMenu(show) {
        if (show) {
            this.menuOverlay.style.display = 'block'
        } else {
            this.menuOverlay.style.display = 'none'
        }
    }
}

const app = new Application()
window.app = app

