/**
 * 《心血来潮，这次我用代码“敲”木鱼》
 * https://juejin.cn/post/7199660596735164475
 */

const dom = {
    woodenFish: document.querySelector("img"),
    text: document.querySelector(".w-f-c-text"),
    audio: document.querySelector("audio")
}
// 控制木鱼大小、弹出文字等样式
const woodenFish = {
    className(type) {
        dom.woodenFish.classList[type]("w-f-c-i-size")
    },
    size() {
        this.className("add")
        setTimeout(() => this.className("remove"), 300)
    },
    createText: () => {
        const p = document.createElement("p")
        p.innerText = "功德+1"
        dom.text.appendChild(p)
    }
}
// 振动
const vibrate = () => {
    const navigator = window.navigator
    if (!("vibrate" in navigator)) return
    navigator.vibrate =
        navigator.vibrate ||
        navigator.webkitVibrate ||
        navigator.mozVibrate ||
        navigator.msVibrate
    if (!navigator.vibrate) return
    navigator.vibrate(300)
}
// 在全屏或非全屏之间切换
const toggleFullScreen = () => {
    if (!document.fullscreenElement)
        return document.documentElement.requestFullscreen()
    if (!document.exitFullscreen) return
    document.exitFullscreen()
}

dom.woodenFish.addEventListener("click", () => {
    woodenFish.size()
    woodenFish.createText()
    dom.audio.load()
    dom.audio.play()
    vibrate()
})
document.addEventListener("keydown", (e) =>
    e.keyCode == 13 ? toggleFullScreen() : false
)

console.log("\n按下Enter键，可以在全屏或非全屏之间来回切换。\n\n")
