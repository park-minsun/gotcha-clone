
      var swiper = new Swiper(".mainVisual > .mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {     //자동슬라이드 (false-비활성화)
          delay: 3000, // 시간 설정
          disableOnInteraction: false, // false-스와이프 후 자동 재생
        },

        loop : true,   // 슬라이드 반복 여부

        loopAdditionalSlides : 1,

 // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
      });
