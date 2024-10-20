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

Array.prototype.delete = function (element) {
    const index = this.indexOf(element)
    return index !== -1 && this.splice(index, 1)
}

if (document.readyState === 'ready' || document.readyState === 'complete') {
    window.app = new Application()
} else {
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            window.app = new Application()
        }
    }
}

