// 轮播图
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            var $pagination = document.querySelector('.swiper-pagination');
            $pagination.innerHTML = '';
            for (var i = 0; i < total; i++) {
                var $span = document.createElement('span');
                if (i == current - 1) {
                    $span.className = "swiper-pagination-active";
                } else {
                    $span.className = "swiper-pagination-bullet";
                }
                $pagination.appendChild($span);
            }
        }
    },
});

// 导航移入显示效果
var showNav = (function () {
    return {
        init() {
            this.event()
        },
        $(ele) {
            return document.querySelector(ele);
        },
        $all(ele) {
            return document.querySelectorAll(ele);
        },
        event() {
            var _this = this;
            this.$('#header').addEventListener('mouseover',
                function (e) {
                    e = e || window.event;
                    var target = e.target || e.srcElement;
                    if (target.classList[1] == "nav_hover") {
                        _this.SetStyle('block', 'white', {'height': 278}, 300, '#666666', target)
                    }
                    else if (target.classList[0] == "getColor") {
                        _this.SetStyle('none', 'transparent', {'height': 80}, 100, 'white', target)
                    }
                },)
            this.$('#header').addEventListener('mouseleave', function () {
                _this.SetStyle('none', 'transparent', {'height': 80}, 100, 'white')
            })
        },

        SetStyle(display, color, targetObj, time, color2, thisTarget) {
            var _this = this;
            this.$('.header_hover').style.display = display;
            this.$('#header').style.backgroundColor = color;
            move('#header', targetObj, time);
            for (var i = 0; i < this.$all('.getColor').length; i++) {
                _this.$all('.getColor')[i].style.color = color2
            }
            if (thisTarget) {
                thisTarget.style.color = '#00b9f2';
            }
        }
    }
}())
showNav.init();


//
// function $(ele) {
//     return document.querySelector(ele);
// }
//
// function $all(ele) {
//     return document.querySelectorAll(ele);
// }
//
// $('#header').addEventListener('mouseover',
//     function (e) {
//         e = e || window.event;
//         var target = e.target || e.srcElement;
//         if (target.classList[1] == "nav_hover") {
//
//             $('.header_hover').style.display = 'block';
//             $('#header').style.backgroundColor = 'white';
//             move('#header', {'height': 278}, 300);
//             for (var i = 0; i < $all('.getColor').length; i++) {
//                 $all('.getColor')[i].style.color = 'black'
//             }
//             target.style.color = '#00b9f2';
//
//
//         } else if (target.classList[0] == "getColor") {
//
//             $('.header_hover').style.display = 'none';
//             $('#header').style.backgroundColor = 'transparent';
//             move('#header', {'height': 80}, 100)
//             for (var i = 0; i < $all('.getColor').length; i++) {
//                 $all('.getColor')[i].style.color = 'white';
//             }
//             target.style.color = '#00b9f2';
//
//
//         }
//     },)
// $('#header').addEventListener('mouseleave', function () {
//
//
//     $('.header_hover').style.display = 'none';
//     $('#header').style.backgroundColor = 'transparent';
//     move('#header', {'height': 80}, 100)
//     for (var i = 0; i < $all('.getColor').length; i++) {
//         $all('.getColor')[i].style.color = 'white'
//     }
//
// })
//
