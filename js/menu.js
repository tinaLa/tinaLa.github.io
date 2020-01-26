function showMenu() {
    let links = document.getElementsByClassName("nav-link");
    
    for(i = 0; i < links.length; i++) {
        links[i].classList.add("responsive");
    }
}