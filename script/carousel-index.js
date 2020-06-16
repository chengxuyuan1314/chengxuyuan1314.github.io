var ul = document.getElementById("ul");
var mat1 = document.getElementById("mat1");
var mat2 = document.getElementById("mat2");
var mat3 = document.getElementById("mat3");
var mat4 = document.getElementById("mat4");
var mat5 = document.getElementById("mat5");
var img = document.getElementById("img");
var left = document.getElementById("left");
var right = document.getElementById("right");


//首先选中第一个小li 改变其样式达到选中的效果
mat1.style['border-bottom'] = "2px solid rgb(0,0,0)";
mat1.style.color = "#000";

//定义函数alter 将其样式达到选中效果
function alter(obj) {

    obj.style['border-bottom'] = "2px solid rgb(0,0,0)";
    obj.style.color = "#000";

}
//定义函数 将其样式恢复默认
function clear(obj) {
    obj.style['border-bottom'] = "2px solid rgb(158, 158, 158)";
    obj.style.color = "rgb(90, 90, 90)";
}

var flag = 0;

//定义一个循环计时器,每5s执行函数fun()
var id = setInterval(fun, 5000);

//切换图片 选中下一个li

function fun() {
    switch (flag) {

        case 0:
            img.src = "upload/mat2.jpg";
            flag = 1;


            alter(mat2);
            clear(mat1);
            clear(mat3);
            clear(mat4);
            clear(mat5);
            break;
        case 1:
            img.src = "upload/mat3.jpg";
            flag = 2;
            alter(mat3);
            clear(mat2);
            clear(mat1);
            clear(mat4);
            clear(mat5);
            break;
        case 2:
            img.src = "upload/mat4.jpg";
            flag = 3;
            alter(mat4);
            clear(mat2);
            clear(mat3);
            clear(mat1);
            clear(mat5);
            break;
        case 3:
            img.src = "upload/mat5.jpg";
            flag = 4;
            alter(mat5);
            clear(mat2);
            clear(mat3);
            clear(mat4);
            clear(mat1);
            break;
        case 4:
            img.src = "upload/mat1.jpg";
            flag = 0;
            alter(mat1);
            clear(mat2);
            clear(mat3);
            clear(mat4);
            clear(mat5);
            break;

    }

}

//各li点击事件 点击切换img图片改变自身样式
mat1.onclick = function() {

    img.src = "upload/mat1.jpg";
    flag = 0;


    alter(mat1);
    clear(mat2);
    clear(mat3);
    clear(mat4);
    clear(mat5);


}
mat2.onclick = function() {

    img.src = "upload/mat2.jpg";
    flag = 1;


    alter(mat2);
    clear(mat1);
    clear(mat3);
    clear(mat4);
    clear(mat5);


}
mat3.onclick = function() {

    img.src = "upload/mat3.jpg";
    flag = 2;


    alter(mat3);
    clear(mat2);
    clear(mat1);
    clear(mat4);
    clear(mat5);


}
mat4.onclick = function() {

    img.src = "upload/mat4.jpg";
    flag = 3;


    alter(mat4);
    clear(mat2);
    clear(mat3);
    clear(mat1);
    clear(mat5);


}
mat5.onclick = function() {

    img.src = "upload/mat5.jpg";
    flag = 4;


    alter(mat5);
    clear(mat2);
    clear(mat3);
    clear(mat4);
    clear(mat1);


}

//左右箭头  



//右箭头直接调用fun()进行切换
right.onclick = function() {
    fun();
}

//左箭头判断flag  进行更改在调用fun();
left.onclick = function() {

    switch (flag) {
        case 1:
            flag = 4;
            break;
        case 2:
            flag = 0;
            break;
        case 3:
            flag = 1;
            break;
        case 4:
            flag = 2;
            break;
        case 0:
            flag = 3;
            break;
    }

    fun();

}