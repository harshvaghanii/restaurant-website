let hamMenu = () => {
    let x = document.getElementById("nav-link-ul");

    if (x.style.clipPath === "circle(900px at 95% -20%)") x.style.clipPath = "circle(100px at 95% -20%)";

    else x.style.clipPath = "circle(900px at 95% -20%)";
}


let hideMenu = () => {
    if (screen.width <= 600) {
        let x = document.getElementById("nav-link-ul");
        x.style.clipPath = "circle(100px at 95% -20%)";
    }
}