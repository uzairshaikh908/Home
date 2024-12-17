function ready(e) {
    "loading" != document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
}

function registerListener(e, t) {
    window.addEventListener ? window.addEventListener(e, t) : window.attachEvent("on" + e, t)
}

function isInViewport(e) {
    var t = e.getBoundingClientRect();
    return t.top >= 0 && t.left >= 0 && t.top <= (window.innerHeight || document.documentElement.clientHeight) && t.left <= (window.innerWidth || document.documentElement.clientWidth)
}

function lazyLoad() {
    for (var e, t = document.getElementsByClassName("lazyload"), n = 0; n < t.length; n++) isInViewport(t[n]) && (e = t[n].getAttribute("data-src"), t[n].setAttribute("src", e), t[n].classList.toggle("lazyloaded"), t[n].classList.toggle("lazyload"))
}
registerListener("load", lazyLoad), registerListener("scroll", lazyLoad);