// 详情页手机轮播图  和首页轮播图基本一致
var ul = document.getElementById("ul");
var mate1 = document.getElementById("mate1");
var mate2 = document.getElementById("mate2");
var mate3 = document.getElementById("mate3");
var mate4 = document.getElementById("mate4");
var mate5 = document.getElementById("mate5");
var img = document.getElementById("img");
mate1.style.backgroundColor = "rgb(255, 80, 0)";
var flag = 0;


var id = setInterval(fun, 5000);


function fun() {
    switch (flag) {

        case 0:
            img.src = "upload/mate2.jpg";
            flag = 1;
            mate2.style.backgroundColor = "rgb(255, 80, 0)";
            mate1.style.backgroundColor = "#ffffff";
            break;
        case 1:
            img.src = "upload/mate3.jpg";
            flag = 2;
            mate3.style.backgroundColor = "rgb(255, 80, 0)";
            mate2.style.backgroundColor = "#ffffff";
            break;
        case 2:
            img.src = "upload/mate4.jpg";
            flag = 3;
            mate4.style.backgroundColor = "rgb(255, 80, 0)";
            mate3.style.backgroundColor = "#ffffff";
            break;
        case 3:
            img.src = "upload/mate5.jpg";
            flag = 4;
            mate5.style.backgroundColor = "rgb(255, 80, 0)";
            mate4.style.backgroundColor = "#ffffff";
            break;
        case 4:
            img.src = "upload/mate1.jpg";
            flag = 0;
            mate1.style.backgroundColor = "rgb(255, 80, 0)";
            mate5.style.backgroundColor = "#ffffff";
            break;

    }

}

mate1.onclick = function() {

    img.src = "upload/mate1.jpg";
    flag = 0;


    mate1.style.backgroundColor = "rgb(255, 80, 0)";
    mate2.style.backgroundColor = "#ffffff";
    mate3.style.backgroundColor = "#ffffff";
    mate4.style.backgroundColor = "#ffffff";
    mate5.style.backgroundColor = "#ffffff";


}
mate2.onclick = function() {

    img.src = "upload/mate2.jpg";
    flag = 1;


    mate2.style.backgroundColor = "rgb(255, 80, 0)";
    mate1.style.backgroundColor = "#ffffff";
    mate3.style.backgroundColor = "#ffffff";
    mate4.style.backgroundColor = "#ffffff";
    mate5.style.backgroundColor = "#ffffff";


}
mate3.onclick = function() {

    img.src = "upload/mate3.jpg";
    flag = 2;


    mate3.style.backgroundColor = "rgb(255, 80, 0)";
    mate2.style.backgroundColor = "#ffffff";
    mate1.style.backgroundColor = "#ffffff";
    mate4.style.backgroundColor = "#ffffff";
    mate5.style.backgroundColor = "#ffffff";


}
mate4.onclick = function() {

    img.src = "upload/mate4.jpg";
    flag = 3;


    mate4.style.backgroundColor = "rgb(255, 80, 0)";
    mate2.style.backgroundColor = "#ffffff";
    mate3.style.backgroundColor = "#ffffff";
    mate1.style.backgroundColor = "#ffffff";
    mate5.style.backgroundColor = "#ffffff";


}
mate5.onclick = function() {

    img.src = "upload/mate5.jpg";
    flag = 4;


    mate5.style.backgroundColor = "rgb(255, 80, 0)";
    mate2.style.backgroundColor = "#ffffff";
    mate3.style.backgroundColor = "#ffffff";
    mate4.style.backgroundColor = "#ffffff";
    mate1.style.backgroundColor = "#ffffff";

}