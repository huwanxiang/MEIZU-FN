var $nav_hover = document.querySelectorAll('.nav_hover');
var $header = document.querySelector('#header');
var $logo = document.querySelector('.logo_img');
var $nav_list = document.querySelector('.nav_list');
var $fontwhite = document.querySelectorAll('.fontwhite');
var $header_hover = document.querySelector('.header_hover');
// console.log($fontwhite);
for (var i = 0; i < $nav_hover.length; i++) {
    // debugger
    $nav_hover[i].onmouseover = function () {
        show();
    }

    $nav_list.onmouseout = function () {
        hidden();
    }
}

$header_hover.onmouseover = function () {
    show();
}
$header_hover.onmouseout = function () {
    hidden();
}

function show() {
    // console.log(1);
    $header.style.backgroundColor = 'white';
    $header.style.transition = 'all 1s';
    $logo.src = './images/logo2.png';
    $header_hover.style.transition = 'all 1s';
    $header_hover.style.opacity = '1';
    //  $header_hover.style.display = 'block';
    for (var i = 0; i < $fontwhite.length; i++) {
        $fontwhite[i].style.color = '#838383';
    }
}

function hidden() {
    $logo.src = './images/huawei.png';
    $header.style.transition = 'all 1s';
    $header_hover.style.transition = 'all 1s';
    $header_hover.style.opacity = '0';
    // $header_hover.style.display = 'none';
    $header.style.backgroundColor = '#ffffff00';
    for (var i = 0; i < $fontwhite.length; i++) {
        $fontwhite[i].style.color = 'white';
    }
}