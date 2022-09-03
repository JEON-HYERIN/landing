$(function(){
  // a태그 기본동작 방지
  $(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
  });

  // pre-load
  const load = gsap.timeline({
    defaults: {
      duration: 2.5
    },
    paused: true
  })
  load.addLabel('a')
  .fromTo('.title-box', {opacity: 0}, {opacity: 1},'a')
  .to('.page-load', {y: '-95vw'},'a+=1.5')
  .to('.title-box', {opacity: 0, ease: Power4.easeIn}, 'a+=1.1')
  .set('.page-load', {display: 'none'});
  load.play();

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

