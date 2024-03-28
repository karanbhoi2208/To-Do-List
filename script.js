const inputBox = document.querySelector("#input");
const ul_li = document.getElementById("ul-li");


function addTask() {
    if (inputBox.value !== '') {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        ul_li.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)

    } else {
        alert("Write something");
    }
    inputBox.value = ""
    saveData();
}



ul_li.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        let clickedLi = e.target;
        clickedLi.classList.toggle("checked");
        if (clickedLi.classList.contains("checked")) {
            setTimeout(function () {
                ul_li.appendChild(clickedLi); // Move checked item to the bottom
            }, 300); // Wait for the animation to complete before moving
        } else {
            ul_li.insertBefore(clickedLi, ul_li.firstChild); // Move unchecked item to the top
        }
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", ul_li.innerHTML)
}
function displayData() {
    ul_li.innerHTML = localStorage.getItem("data")
}
displayData()


