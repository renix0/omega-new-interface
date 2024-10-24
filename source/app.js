Array.prototype.delete = function (element) {
    const index = this.indexOf(element)
    return index !== -1 && this.splice(index, 1)
}

Object.prototype.has = function(property) {
    return this.hasOwnProperty(property)
}


class Application {
    constructor() {
        this.menuOverlay = document.getElementById('menu-overlay')
        this.showMenu = this.showMenu.bind(this)
        this.showMenu(true)
    }

    showMenu(show) {
        this.menuOverlay.style.display = show ? 'block' : 'none'
    }

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
