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
            var _this = this,
                $allShow = this.$all('#header .nav_hover'),
                $allShow_list = this.$all('#show-navList .type_area')
            this.$('#header').addEventListener('mouseover',
                function (e) {
                    e = e || window.event;
                    var target = e.target || e.srcElement;
                    if (target.classList[1] == "nav_hover") {
                        _this.SetStyle('block', 'white', {'height': 198}, 300, '#666666', target)
                    }
                    else if (target.classList[0] == "getColor") {
                        _this.SetStyle('none', 'transparent', {'height': 0}, 100, 'white', target)
                    }
                },false)
            this.$('#header').addEventListener('mouseleave', function () {
                _this.SetStyle('none', 'transparent', {'height': 0}, 100, 'white')
            },false)

            for (var a = 0;a<$allShow.length;a++){
                $allShow[a].index = a;
                $allShow[a].addEventListener('mouseenter',function (e) {
                    for (var b = 0;b<$allShow.length;b++){
                        $allShow_list[b].style.zIndex = 1;
                        $allShow_list[b].style.opacity = 0;
                    }
                    e = e || window.event;
                    var target = e.target||e.srcElement;
                    $allShow_list[target.index].style.zIndex = 999;
                    $allShow_list[target.index].style.opacity = 1;
                },false)
            }
        },
        SetStyle(display, color, targetObj, time, color2, thisTarget) {
            var _this = this;
            this.$('.header_hover').style.display = display;
            this.$('#header').style.backgroundColor = color;
            move('#show-navList', targetObj, time);
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

