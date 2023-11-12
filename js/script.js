function showPopup() {
    document.getElementById("popupContainer").style.visibility = "visible";
    document.getElementById("overlay").style.visibility = "visible";
    setTimeout(function() {
        document.getElementById("popupContainer").style.opacity = "1";
        document.getElementById("popupContainer").style.top = "22%";
        document.getElementById("overlay").style.opacity = "1";
    }, 80);
}

function hidePopup() {
    document.getElementById("popupContainer").style.top = "70%";
    setTimeout(function() {
        document.getElementById("popupContainer").style.opacity = "0";
        document.getElementById("popupContainer").style.visibility = "hidden";
        document.getElementById("overlay").style.visibility = "hidden";
        document.getElementById("overlay").style.opacity = "0";
    }, 100);
}

// const text=document.querySelector(".secT");
// const textload = () => {
//     setTimeout(() => {
//         text.textContent = "Yuán";
//     }, 0);
//     setTimeout(() => {
//         text.textContent = "Hein Thet Zan";
//     }, 4000);
//     setTimeout(() => {
//         text.textContent = "管文源";
//     }, 8000);
//     setTimeout(() => {
//         text.textContent = "boy";
//     }, 12000);
// }

// textload();
// setInterval(textload, 16000);

