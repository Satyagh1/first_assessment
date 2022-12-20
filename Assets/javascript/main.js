$('.owl-demo').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    // autoplay:true,
    // autoplayTimeout:1000,
    // autoplayHoverPause:true,
    navText: [$('.sm-next'),$('.sm-prev')],
    dots:false,
});
$('.center').owlCarousel({
    center:true,
    items: 4,
    loop: true,
    margin: 10,
    nav:true,
    dots:false,
    // autoplay:true,
    // autoplayTimeout:3000,
    // autoplayHoverPause:true,
    navText: [$('.am-next'),$('.am-prev')],
});