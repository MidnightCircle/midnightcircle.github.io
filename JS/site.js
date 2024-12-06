document.getElementById("burger-id").addEventListener("click", (e) => {

    var page = document.getElementById("page");
    var mobNav = document.getElementById("mobile-nav-id");

    if (page.style.display === "none") {
        page.style.display = "block";
        mobNav.style.display = "none";
    }
    else {
        page.style.display = "none";
        mobNav.style.display = "block";
    }

})

document.getElementById("about-us-id").addEventListener("click", (e) => {

    document.getElementById("top-menu-id").style.display = "none";
    document.getElementById("about-us-menu-id").style.display = "block";
})

document.getElementById("about-us-back-id").addEventListener("click", (e) => {

    document.getElementById("top-menu-id").style.display = "block";
    document.getElementById("about-us-menu-id").style.display = "none";
})

document.getElementById("our-shows-id").addEventListener("click", (e) => {

    document.getElementById("top-menu-id").style.display = "none";
    document.getElementById("our-shows-menu-id").style.display = "block";
})

document.getElementById("our-shows-back-id").addEventListener("click", (e) => {

    document.getElementById("top-menu-id").style.display = "block";
    document.getElementById("our-shows-menu-id").style.display = "none";
})

document.getElementById("whats-on-id").addEventListener("click", (e) => {

    document.getElementById("top-menu-id").style.display = "none";
    document.getElementById("whats-on-menu-id").style.display = "block";
})

document.getElementById("whats-on-back-id").addEventListener("click", (e) => {

    document.getElementById("top-menu-id").style.display = "block";
    document.getElementById("whats-on-menu-id").style.display = "none";
})
