!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodySelector:document.querySelector("body")};var e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((function(){t.bodySelector.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.startBtn.setAttribute("disabled","true")})),t.stopBtn.addEventListener("click",(function(){clearTimeout(e),t.startBtn.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.c189fd24.js.map