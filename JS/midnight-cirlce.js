/**
 * Functionality for Midnight Circle website
 * 
 * @author M.P. Vaughan
 * 
 */


/**
 * Burger menu functionality
 */

document.getElementById("burger-id").addEventListener("click", (e) => {

    var page = document.getElementById("page");
    var mobNav = document.getElementById("mob-nav-id");

    if (page.style.display === "none") {
        page.style.display = "block";
        mobNav.style.display = "none";
    }
    else {
        page.style.display = "none";
        mobNav.style.display = "block";
    }

})