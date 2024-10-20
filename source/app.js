class Application {
    constructor() {
        this.menuOverlay = document.getElementById('menu-overlay')
        this.menuTabs = document.querySelectorAll('.tab-button')
        this.menuTabContents = document.querySelectorAll('.tab-content')
        this.hoverSound = new Audio('../assets/sounds/button-hover.wav')
        this.activeSound = new Audio('../assets/sounds/button-click.wav')
        this.showMenu = this.showMenu.bind(this)
        this.initMenuTabs = this.initMenuTabs.bind(this)
        this.switchMenuTab = this.switchMenuTab.bind(this)
        this.showMenu(true)
        this.initMenuTabs()
    }

    showMenu(show) {
        this.menuOverlay.style.display = show ? 'block' : 'none'
    }

    initMenuTabs() {
        this.menuTabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                this.switchMenuTab(index)
                this.activeSound.play()
            })
            tab.addEventListener('mouseenter', () => this.hoverSound.play())
        })
        this.switchMenuTab(0)

        document.querySelectorAll('.player-profile input[type="text"]').forEach(input => {
            input.addEventListener('input', function () {
                const skinPreview = this.parentElement.querySelector('.skin-preview')
                if (this.id.includes('skin-url')) {
                    skinPreview.style.backgroundImage = `url(${this.value})`
                    skinPreview.style.backgroundSize = 'cover'
                }
            })
        })
        
    }

    switchMenuTab(index) {
        this.menuTabs.forEach((tab, i) => {
            tab.classList.toggle('active', i === index)
            this.menuTabContents[i].style.display = i === index ? 'block' : 'none'
        })
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
