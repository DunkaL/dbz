"use strict";

document.addEventListener("DOMContentLoaded", function () {
  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
  var butTon = document.querySelectorAll('.btn-ripple');

  var _loop = function _loop(_i) {
    butTon[_i].addEventListener('click', function (e) {
      e.preventDefault();
      var ripple = document.querySelector('.ripple');

      if (ripple) {
        ripple.remove();
      }

      var buttonWidth = butTon[_i].offsetWidth,
          buttonHeight = butTon[_i].offsetHeight;

      if (buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
      } else {
        buttonWidth = buttonHeight;
      }

      var x = e.offsetX == undefined ? e.layerX : e.offsetX - buttonWidth / 2,
          y = e.offsetY == undefined ? e.layerY : e.offsetY - buttonHeight / 2;
      var span = document.createElement('span');
      span.className = 'ripple';
      var s = span.style;
      s.width = buttonWidth + 'px';
      s.height = buttonHeight + 'px';
      s.top = y + 'px';
      s.left = x + 'px';

      butTon[_i].appendChild(span);
    });
  };

  for (var _i = 0; _i < butTon.length; _i++) {
    _loop(_i);
  }

  ;
  document.querySelector('#hamburger').addEventListener('click', function () {
    document.querySelector('#hamburger').classList.toggle('menu-active');
    document.querySelector('body').classList.toggle('overflow-hidden');
    document.querySelector('#fond').classList.toggle('active');
    document.querySelector('#navbar-nav').classList.toggle('active');
  });
  var tabNavs = document.querySelectorAll('.tabs-list-link');
  var tabPanes = document.querySelectorAll(".tabs-content-pane");

  for (var i = 0; i < tabNavs.length; i++) {
    tabNavs[i].addEventListener("click", function (e) {
      e.preventDefault();
      var activeTabAttr = e.target.getAttribute("data-tab");

      for (var j = 0; j < tabNavs.length; j++) {
        var contentAttr = tabPanes[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
          tabNavs[j].classList.add("active");
          tabPanes[j].classList.add("active");
        } else {
          tabNavs[j].classList.remove("active");
          tabPanes[j].classList.remove("active");
        }
      }

      ;
    });
  }

  var initSwiper = new Swiper('.inner__content-services', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    navigation: {
      nextEl: '.inner__content-services-btn-next',
      prevEl: '.inner__content-services-btn-prev'
    }
  });

  if (window.innerWidth < 740) {
    new Swiper('.reviews__swiper', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.reviews__swiper-next',
        prevEl: '.reviews__swiper-prev'
      }
    });
  }
});