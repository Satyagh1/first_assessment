$('.owl-demo').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    // autoplay:true,
    // autoplayTimeout:1000,
    // autoplayHoverPause:true,
    navText: [$('.sm-prev'),$('.sm-next')],
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
    navText: [$('.am-prev'),$('.am-next')],
});
$('.owl-bestseller').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:4,
    navText: [$('.bm-prev'),$('.bm-next')],
    // autoplay:true,
    // autoplayTimeout:1000,
    // autoplayHoverPause:true,
    dots:false,
});