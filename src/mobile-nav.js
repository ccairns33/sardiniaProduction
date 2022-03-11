let mobileNavShow = () =>{
    let mobileIcon = document.querySelector("#mobile-nav-icon");
    const mobileNavContainer = document.querySelector(".mobile-nav-container");

    mobileIcon.addEventListener("click", () =>{
        mobileNavContainer.classList.toggle("mobile-nav-open");
        changeMobileIcon(mobileIcon);
    })
}
let changeMobileIcon = (icon) =>{
    let bars = "fa-bars";
    let close = "fa-times";

    if (icon.classList.contains(bars)){
        icon.classList.remove(bars);
        icon.classList.add(close);
    }
    else {
        icon.classList.add(bars);
        icon.classList.remove(close);
        }
}
export{mobileNavShow}