//表单验证 利用鼠标移出事件 对数据进行判断


//如果不为空直接通过小符号颜色改为绿色，否则为红色
function judge(inp, sp) {
    if (inp.value) {
        sp.style.color = "green";

    } else {
        sp.style.color = "red";

    }
}
//对确定密码进行判断 不为空的基础上加上与密码输入一致
function judge2(inp, sp) {
    if (inp.value == password.value && inp.value) {
        sp.style.color = "green";
    } else {
        sp.style.color = "red";
    }
}

var password = document.getElementById("password");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var span3 = document.getElementById("span3");
var span4 = document.getElementById("span4");
var submit = document.getElementById("submit");
var hint = document.getElementById("hint");

//一个跳转  所有标识都为绿色后可以跳转首页
submit.onclick = function() {
    if (span1.style.color == "green" && span2.style.color == "green" && span3.style.color == "green" && span4.style.color == "green") {
        for (var i = 10; i > 1; i--) {
            hint.innerHTML = "登录成功，3s后跳转首页";
            setTimeout(fun, 3000);
        }

    } else {
        hint.innerHTML = "请输入完整信息";
    }
}


//跳转首页函数
function fun() {
    window.open("index.html")
}