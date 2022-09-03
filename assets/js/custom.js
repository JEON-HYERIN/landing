$(function(){
  // a태그 기본동작 방지
  $(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
  });
  
  // pre-load
  const load = gsap.timeline({
    paused: true,
  })
  load.addLabel('label')
  .to('.title-box', {opacity: 1, delay: .3, duration: 2},'label')
  .to('.page-load', {yPercent: -100, delay: 2.5, ease: Power3.easeIn, duration: .8},'label')
  .to('.title-box', {opacity: 0, delay: 2, duration: 1.7},'label')
  .set('.page-load', {display: 'none'})
  load.play();

  // visual
  const a = gsap.fromTo('.sc-visual .title .row *', {yPercent: 100,}, {yPercent: 0, duration: .5, ease: Power4.easeOut, delay: 3.3});

  // 올해년도 구하기
  const year = new Date().getFullYear();
  $('.year').text(year);

  // link gnb click!
  $('.link-gnb').click(function(){
    const dataMenu = $(this).parent().data('menu');
    const scrollTop = $('#' + dataMenu).offset().top;
    // $('.link-gnb').removeClass('selected');
    // $(this).addClass('selected');
    $('html, body').animate({scrollTop: scrollTop}, 500);
  });

  // more view
  $('.sc-about .link-more').click(function(){
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

