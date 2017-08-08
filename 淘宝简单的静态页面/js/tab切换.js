var search = document.getElementById("search");
var searInput = document.getElementById("searInput");
var sub = document.getElementById("sub");
var getTabItem = search.children[0].children;
var tabSwitch = document.getElementsByClassName("inputPloceholder");
getTabItem[0].style.backgroundColor="#ff5500";
getTabItem[0].style.color="#fff";
for (var i = 0, len = getTabItem.length; i < len; i++) {
    getTabItem[i].addEventListener("click", (function (inow) {
        return function () {
            hidden(tabSwitch);
            tabSwitch[inow].style.display = "block";
            removeAttr(getTabItem);
            if (inow == 0) {
                searInput.style.borderColor = "#ff5500";
                sub.style.background = "#FF4200";
                this.style.backgroundColor = "#ff5500";
                this.style.color = "#fff";
            } else if (inow == 1) {
                searInput.style.borderColor = "#C60000";
                sub.style.background = "#C40000";
                this.style.backgroundColor = "#C60000";
                this.style.color = "#fff";
            } else {
                searInput.style.borderColor = "#F50";
                sub.style.background = "#FF4200";
                this.style.backgroundColor = "#F50";
                this.style.color = "#fff";
            }
        }
    })(i), false)
}

function hidden(obj) {  //隐藏
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.display = "none";
    }
}

function removeAttr(obj) {   //移除背景,将字体颜色设置为f40
    for (var i = 0; i < obj.length; i++) {
        obj[i].removeAttribute("style");
        // obj.style.backgroundColor
        console.log("remove");
    }
}

