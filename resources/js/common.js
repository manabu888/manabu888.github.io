window.addEventListener('DOMContentLoaded', (event) => {
    setSeeMoreButton();
    setCardOverray();
    setDropdownMenu();
    dropdownButtonListener();
    resetCard();
});

function setSeeMoreButton() {
    const seeMoreButton = document.querySelector('section#home button');
    const aboutSection = document.getElementById('about');
    seeMoreButton.addEventListener('click', (e) => {
        scrollToElement(aboutSection);
    });
}

function scrollToElement(element) {
    element.scrollIntoView();
}

function setCardOverray() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((element)=>{
        element.addEventListener('click' , (event) => {
            let target = event.target.offsetParent.children[0];
            if (target.className == "overray"){
                turnOnCardOverray(target);
            }
        });
    });
}

function resetCard() {
    window.onclick = function(event) {
        if (event.target.offsetParent != null && !event.target.offsetParent.matches('.card')) {
            resetCardOverray();
        }
    }
}

function resetCardOverray() {
    const overrays = document.querySelectorAll('.overray');
    overrays.forEach((e) => {
        e.style.display = "none";
    });
}

function turnOnCardOverray(target) {
    target.style.display = "flex";
}

function turnOffCardOveray(target) {
    target.style.display = "none";
}

function setDropdownMenu() {
    const dropDownBtn = document.querySelector('.menu-icon i');
    if (dropDownBtn != null) {
        dropDownBtn.addEventListener('click', (e) => {
            switchDropdown();
        });
    }
}

function dropdownButtonListener() {
    let menuElements = document.querySelectorAll("#dropdown-content a");
    menuElements.forEach((menu)=> {
        menu.addEventListener('click', () =>{
            switchDropdown();
        });
    });
}

function switchDropdown() {
    let dropdown = document.getElementById('dropdown-content');
    let status = dropdown.style.display;
    if(status == null || status == '') {
        dropdown.style.display = "flex";
    } else if (status === "none") {
        dropdown.style.display = "flex";
    } else {
        dropdown.style.display = "none";
    }
}
