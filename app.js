let hamMenu = () => {
    let x = document.getElementById("nav-link-ul");

    if (x.style.clipPath === "circle(100px at 95% -15%)") x.style.clipPath = "circle(900px at 95% -15%)";

    else x.style.clipPath = "circle(100px at 95% -15%)";
}


let hideMenu = () => {
    let x = document.getElementById("nav-link-ul");
    x.style.clipPath = "circle(100px at 95% -15%)";
}