var app = $('.hlr')[0]

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('BECAUSE TECHNOLOGY MATTERS')
    .pauseFor(1500)
    .deleteAll()
    .typeString("THERE'S FUTURE, THERE'S INNOVATION.")
    .pauseFor(1500)
    .deleteAll()
    .typeString('WE DO WHAT WE DREAM.')
    .pauseFor(1500)
    .deleteAll()
    .typeString('ENCOURAGING DIVERSITY, IGNITING MINDS.')
    .start();

$(window).scroll(function(){
    if($(document).scrollTop()>336){
        $('nav').removeClass('transparent')
        $('nav').addClass('red')
        $('nav').removeClass('z-depth-0')
        $('nav').addClass('z-depth-2')
    }
    else{
        $('nav').addClass('transparent')
        $('nav').removeClass('z-depth-2')
        $('nav').removeClass('red')
        $('nav').addClass('z-depth-0')
    }
})

$(document).ready(function(){
    $('.your-class').slick({
        autoplay:true,
        arrows:false,
        dots: true,
        // centerMode: true,
        // focusOnSelect: true
    });
  });

  function scrollDiv2(e){
    console.log(e)
    $([document.documentElement, document.body]).animate({
        scrollTop:$('.div2').offset().top
    }, 700);
    console.log('abc')
  }