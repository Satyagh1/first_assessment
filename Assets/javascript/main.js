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
const accordion = document.querySelectorAll(".custom-menu");

accordion.forEach((el) =>
  el.addEventListener("click", () => {
    let childs = el.children;
    
    if (childs[0].classList.contains("active")) {
        childs[0].classList.remove("active");
        childs[1].classList.remove("active");
    } else {
        childs[0].classList.add("active");
        childs[1].classList.add("active");
      accordion.forEach((el2) => el2.classList.remove("active"));
      childs[0].classList.add("active");
    }
  })
);
const menubtn = document.querySelector('.toggler');
const closebtn = document.querySelector('.close');
const mobile_menu = document.querySelector('.mobile-menu');
let menuopen = false;
menubtn.addEventListener('click', () =>{
    if(!menuopen){
        menubtn.classList.add('toggler-dis');
        mobile_menu.classList.add('active-menu');
        closebtn.classList.add('active-menu');
        menuopen = true;
    }
    // else{
    //     closebtn.classList.remove('active-menu');
    //     mobile_menu.classList.remove('active-menu');
    //     menuopen = false;
    // }
})
closebtn.addEventListener('click', ()=>{
    if(menuopen){
        menubtn.classList.remove('toggler-dis')
        closebtn.classList.remove('active-menu');
        mobile_menu.classList.remove('active-menu');
        menuopen = false;
        
    }
})