document.getElementById("burger-id").addEventListener("click", (e) => {
    document.getElementById("page").style.display = "none";
    var elements = document.getElementsByClassName("header-menu");
    console.log("Number of elements: " + elements.length);
    for (let i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.style.display = "block";
    }
})
