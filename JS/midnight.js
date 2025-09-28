
/**
 * Array of show objects with title and link
 */
const shows = [
    {
        title: "A Midsummer Nightmare!",
        link: "nightmare.html"
    },
    {
        title: "Wuthering Heights",
        link: "wuthering.html"
    },
    {
        title: "Ghost Stories of an Antiquary",
        link: "ghost-stories.html"
    },
    {
        title: "Frankenstein",
        link: "frankenstein.html"
    },
    {
        title: "The Picture of Dorian Gray",
        link: "dorian-gray.html"
    }
];

/**
 * Array of current what's on objects with title and link
 */
const whatsOn = [
    {
        title: "Coming up...",
        link: "coming-up.html"
    }
];

/**
 * Array of commission objects with title and link
 */
const commissions = [
    {
        title: "Commissioned Work",
        link: "commissions.html"
    }
];


/**
 * Array of award image paths
 */
const awards = [
    "images/awards/offies-design.png",
    "images/awards/offies-idea.png",
    "images/awards/broadway-world-23.png",
    "images/awards/Gothenburg-Fringe-24.png"
];

/**
 * Function to write the list of shows to the designated div.
 */
function writeShows() {
    try {

        const showsDiv = document.getElementById("our-shows-list-id");

        if (showsDiv !== null) {

            let text = "";

            for (let i = 0; i < shows.length; i++) {

                text += "<li><a href=\"" + shows[i].link + "\">" + shows[i].title + "</a></li>";
            }

            showsDiv.innerHTML = text;

        }
    }
    catch (err) {
        console.error(err.message + " in writeShows()");
    }
}

/**
 * Function to write the current what's on list to the designated div.
 */
function writeWhatsOn() {
    try {

        const whatsOnDiv = document.getElementById("whats-on-list-id");

        if (whatsOnDiv !== null) {

            let text = "";

            for (let i = 0; i < whatsOn.length; i++) {

                text += "<li><a href=\"" + whatsOn[i].link + "\">" + whatsOn[i].title + "</a></li>";
            }

            whatsOnDiv.innerHTML = text;

        }
    }
    catch (err) {
        console.error(err.message + " in writeWhatsOn()");
    }
}

/**
 * Function to write the commissions list to the designated div.
 */
function writeCommissions() {
    try {

        const commissionsDiv = document.getElementById("commissions-list-id");

        if (commissionsDiv !== null) {

            let text = "";

            for (let i = 0; i < commissions.length; i++) {

                text += "<li><a href=\"" + commissions[i].link + "\">" + commissions[i].title + "</a></li>";
            }

            commissionsDiv.innerHTML = text;

        }
    }
    catch (err) {
        console.error(err.message + " in writeCommissions()");
    }
}

/**
 * Function to write award images to the footer.
 */
function writeAwards() {
    try {

        const awardsDiv = document.getElementById("awards-footer-id");

        if (awardsDiv !== null) {

            let text = "";

            for (let i = 0; i < awards.length; i++) {

                text += "<div>" + "<img src=\"" + awards[i] + "\" /></div>";
            }

            awardsDiv.innerHTML = text;

        }
    }
    catch (err) {
        console.error(err.message + " in writeAwards()");
    }
}


// Call the functions to populate dynamic content
writeShows();
writeWhatsOn();
writeCommissions();
writeAwards();