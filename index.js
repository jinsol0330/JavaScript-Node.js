const title = document.querySelector("#title");
//id=#, class=.
// title.innerHTML = "Hi From JS";
// title.style.color = "red";
// document.title="I owe you now";

function handleResize(event) {

    console.log("I have been resized");
}

window.addEventListener("resize", handleResize);
//함수를 바로 즉시 호출하지 않음
//내가 필요한 시점에 호출
//만약 handleResize() 라고 한다면 즉시 호출

