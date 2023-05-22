/**
 * Midnight Circle Theatre website functionality
 * @author M.P. Vaughan
 * @copyright Midnight Circle Productions Ltd. (2023)
 */

/**
 * Handles the burger menu click
 */
function burgerClick() {

    try {

        var x = document.getElementById("myLinks");

        if (x.style.display === "block") {

            x.style.display = "none";
        }
        else {
            x.style.display = "block";
        }

    }
    catch (err) {

        console.error(err.message + " in burgerClick()");
    }

}

/**
 * Redirects to a new page
 * @param {string} page
 */
function redirect(page) {

    try {

        location.href = page;

    }
    catch (err) {

        console.error(err.message + " in redirect(page)");
    }
}