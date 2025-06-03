document.querySelector("#menu-toggle").onclick = function (e) {
    e.preventDefault();
    document.querySelector("#menu-wrapper").classList.toggle("hidden");
};
