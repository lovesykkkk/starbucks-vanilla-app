const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    searchInputEl.focus()
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        // 배지숨기기
        // badgeEl.style.display = 'none';
        // gsap.to(요소,지속시간,옵션)
        gsap.to(badgeEl, .6,{
            opacity : 0,
            display : 'none',
        });
        // 버튼 보이기!
        gsap.to(toTopEl, .2, {
            x : 0,
        });



    }else{
        // 배지 보이기
        // badgeEl.style.display = 'block'
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display:'block',
        })
        // 버튼 숨기기!
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(toTopEl, .2, {
            x : 100,
        });

    }
},300));
// _.throttle(함수, 시간) => GSAP이랑 같이 씀!!


toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0,
    });
})




const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay : (index + 1) * .7, // 0.7 1.4 2.1 ...
        opacity : 1
    })
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction : 'vertical',
    autoplay:true,
    loop:true,
});

new Swiper('.promotion .swiper-container', {
    slidesPerView : 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween : 10, // 슬라이드 사이 여백
    centeredSlides : true, // 1번 슬라이드가 가운데 보이기
    loop : true,
    // autoplay : {
    //     delay : 5000
    // },
    pagination: {
        el : '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable : true, // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation : {
        prevEl : '.promotion .swiper-prev',
        nextEl : '.promotion .swiper-next',
    }

});

new Swiper(".awards .swiper-container", {
    autoplay : true,
    loop : true,
    spaceBetween : 30,
    slidesPerView : 5,
    navigation : {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

const promotionEl = document.querySelector(".promotion"); // 숨기고자 하는 요소
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        // 숨김처리
        promotionEl.classList.add('hide')
    }else{
        // 보임처리
        promotionEl.classList.remove('hide')
    }
})

function floatingObject(selector){
    // gsap.to(요소, 시간, 옵션)
    gsap.to(selector, 1, {
        y : 20,
        repeat : -1, // 무한반복 : -1
        yoyo : true,
        ease : Power1.easeInOut,
        delay : 3
    });
}

floatingObject('.floating');

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement : spyEl, // 보여짐 여부를 감시할 요소
        triggerHook : .8,

    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
