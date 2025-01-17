/**
 * Dynamic What's on list
 */
const whatsOn = [
    {
        title: "A Midsummer <s>Night's Dream</s> NIGHTMARE",
        link: "nightmare.html"
    }
];

/**
 * Populates the What's on menus
 */
function populateWhatsOn() {
    try {
        // Populate what's on menus
        var deskDiv = document.getElementById("whats-on-items-desk-id");
        var mobDiv = document.getElementById("whats-on-items-mob-id");

        var deskStr = "";
        var mobStr = "";

        for (var i = 0; i < whatsOn.length; i++) {

            deskStr += "<div class=\"header-nav-folder-item\">";
            deskStr += "<a href=\"" + whatsOn[i].link + "\">";
            deskStr += "<span class=\"header-nav-folder-item-content\">";
            deskStr += whatsOn[i].title;
            deskStr += "</span>";
            deskStr += "</a>";
            deskStr += "</div>";

            mobStr += "<div class=\"container header-menu-nav-item\">";
            mobStr += "<a href=\"" + whatsOn[i].link + "\">";
            mobStr += "<div class=\"header-menu-nav-item-content\">";
            mobStr += whatsOn[i].title;
            mobStr += "</div>";
            mobStr += "</a>";
            mobStr += "</div>";
                
        }

        if (deskDiv !== null) {
            deskDiv.innerHTML = deskStr;
        }
        else {
            console.error("Could not find element 'whats-on-items-desk-id'");
        }

        if (mobDiv !== null) {
            mobDiv.innerHTML = mobStr;
        }
        else {
            console.error("Could not find element 'whats-on-items-mob-id'");
        }
        
    }
    catch (err) {
        console.error(err.message + " in populateWhatsOn()");
    }
}

// Populate menus
populateWhatsOn();


/**
 * Burger menu functionality
 */

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

/**
 * End burger menu functionality
 */