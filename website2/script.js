document.addEventListener("mousemove", function (event) {
    var dot = document.querySelector(".dot");
    dot.style.left = event.clientX + "px";
    dot.style.top = event.clientY + "px";
});


Barba.Pjax.start();

Barba.Dispatcher.on("transitionCompleted", function () {
    var dot = document.querySelector(".dot");
    dot.classList.add("fade-in");

    document.addEventListener("mousemove", function (event) {
        dot.style.left = event.clientX + "px";
        dot.style.top = event.clientY + "px";
    });
});

Barba.Dispatcher.on("newPageReady", function () {
    var dot = document.querySelector(".dot");
    dot.classList.remove("fade-in");
    dot.classList.add("fade-out");
});

Barba.Dispatcher.on("transitionCompleted", function () {
    var dot = document.querySelector(".dot");
    dot.classList.remove("fade-out");
});
