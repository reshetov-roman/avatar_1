var swiper = new Swiper(".mySwiper1", {
    loop: false,
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next-sl0",
      prevEl: ".swiper-button-prev-sl1",
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    loop: false,
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next-ls0",
      prevEl: ".swiper-button-prev-ls1",
    },
  });



    const smoothLinks = document.querySelectorAll('.avatar-wrapper-top__arrow[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };



  const jellyfishTransalate = document.querySelectorAll('.jellyfish-transition');

  if(jellyfishTransalate) {
    window.addEventListener('mousemove', e => {
    
      let mouseX = e.clientX;
      let mouseY = e.clientY;
  
      jellyfishTransalate.forEach(elm => {
  
        let speed = elm.dataset.speed;
  
        elm.style.transform = `translate(${mouseX / 10 * speed}%,${mouseY / 5 * speed}%)`;
        elm.style.transition=" all .4s"
      });
  });
  }


  // 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  // Check all slides and initialize video players
  var swiper = document.getElementById('video-swiper');
  var slides = swiper.querySelectorAll('.swiper-slide');
  var players = [];
  
  for (var i=0; i < slides.length; i++) {
    console.log(slides.length);
    var element = slides[i].querySelectorAll('.yt-player')[0];
    var id = element.getAttribute('data-id');
    
    var player = new YT.Player(element, {
      // height: '315',
      // width: '560',
      videoId: id,
      playerVars: {
        autoplay: false,
        // color: '#7fbc03',
        rel: 0,
        fs: 1,
        modestbranding: true,
        // controls: 0,
        playsinline: 1,
        // showinfo: 0,

        // showinfo: 0,
        frameborder: 0
      },
      // events: {
      //   'onReady': onPlayerReady,
      //   'onStateChange': onPlayerStateChange
      // }
    });
    players.push(player);
  }
  
  var mySwiper = new Swiper('.swiper-container-video', {
    // observer: true,
    effect: 'slide',
    // allowTouchMove: false,
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    speed: 400,
    initialSlide: 1,
    navigation: {
      nextEl: '.swiper-button-next-f1',
      prevEl: '.swiper-button-prev-f0',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
    // on: {
    //   slideChange: function() {
    //     // players[mySwiper.previousIndex].pauseVideo();
    //     // players[mySwiper.activeIndex].playVideo();
    //   }
    // }
  });

  mySwiper.on('slideChange', function (e) {
    players[mySwiper.realIndex].playVideo();
    players[mySwiper.previousIndex -0].pauseVideo();
    // let allIndex = document.querySelector('.wrap .swiper-slide-active');
    // e.slides.forEach((elm, index) => {

    // });
    
});
  
}


var swiperFide1 = new Swiper('.swiper-container-fide1', {
  loop: false,
  effect: 'fade',
  speed: 0,
  fadeEffect: {
    crossFade: true
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  navigation: {
      nextEl: '.swiper-button-next-fd1',
      prevEl: '.swiper-button-prev-fd2'
  },
});


var swiperFide2 = new Swiper('.swiper-container-fide2', {
  loop: false,
  effect: 'fade',
  speed: 0,
  fadeEffect: {
    crossFade: true
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  navigation: {
      nextEl: '.swiper-button-next-fd3',
      prevEl: '.swiper-button-prev-fd4'
  },
});








