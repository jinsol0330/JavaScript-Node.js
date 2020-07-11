const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52,73,94)";
const OTHER_COLOR = "7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor == BASE_COLOR) {
        title.style.color = OTHER_COLOR; 
    }
    else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleResize);
    //클릭했을 때
}
init();

function handleOffline() {
    console.log("lalalala");
}

function handleOnline() {
    cosole.log("Welcome back");
}

window.addEventListener("offline", handleOffline);
//와이파이가 꺼졌을 때
window.addEventListener("online", handleOnline);
//와이파이가 켜졌을 때

