$(function(){
  // a태그 기본동작 방지
  $(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
  });

  const body = document.querySelector('body');
  let scrollPosition = 0;

  //body fixed
  function enable() {
    scrollPosition = window.pageYOffset;
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition}px`;
    body.style.width = '100%';
  }

  function disable() {
    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
  }

  // page-load
  const load = gsap.timeline({
    paused: true,
    onStart: function(){
      enable();
    },
    onComplete: function(){
      disable();
    }
  })
  load.addLabel('label')
  .to('.title-box', {opacity: 1, delay: .3, duration: 2},'label')
  .to('.page-load', {yPercent: -100, delay: 2.5, ease: Power3.easeIn, duration: .8},'label')
  .to('.title-box', {opacity: 0, delay: 2, duration: 1.7},'label')
  .set('.page-load', {display: 'none', delay: 3.3},'label')
  .fromTo('.sc-visual .row *', {yPercent: 100, opacity: 0,}, {yPercent: 0, opacity: 1,duration: .3, ease: Power4.easeOut, delay: 3.3},'label')
  load.play();

  // 올해년도 구하기
  const year = new Date().getFullYear();
  $('.year').text(year);

  // gnb click!
  $('.btn-gnb').click(function(){
    const dataMenu = $(this).parent().data('menu');
    const scrollTop = $('#' + dataMenu).offset().top;
    // $('.btn-gnb').removeClass('selected');
    // $(this).addClass('selected');
    $('html, body').animate({scrollTop: scrollTop}, 500);
  });

  // btn-scroll
  $('.sc-about .btn-scroll').click(function(){
    const scrollTop = $('.sc-work').offset().top;
    $('html, body').animate({scrollTop: scrollTop}, 500);
  });

  // cursor
  const mouseCursor = document.querySelector('.cursor');

  window.addEventListener('mousemove', function(e){
    mouseCursor.style.left = e.clientX + 'px';
    mouseCursor.style.top = e.clientY + 'px';
    mouseCursor.style.opacity = '1';
  });

  $('a').mouseenter(function(){
    $('.cursor').addClass('border');
  });

  $('a').mouseleave(function(){
    $('.cursor').removeClass('border');
  });
});

