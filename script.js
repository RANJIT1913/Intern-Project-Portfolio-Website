let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

const sr = ScrollReveal({
    distance:'40px',
    duration:2500,
    reset: true
});

// sr.reveal('.logo',{delay:200, origin: 'left'});
// sr.reveal('.navbar',{delay:400, origin: 'top'});
// sr.reveal('.menu-btn',{delay:550, origin: 'right'});
sr.reveal('.home-text',{delay:600, origin: 'top'});
sr.reveal('.home-text h1',{delay:690, origin: 'left'});
sr.reveal('.home-text p',{delay:700, origin: 'right'});
sr.reveal('.main-btn',{delay:860, origin: 'left'});
sr.reveal('.share',{delay:950, origin: 'bottom'});
sr.reveal('.home-img',{delay:1000, origin: 'right'});


sr.reveal('.img-box',{delay:200,origin: 'top'});
sr.reveal('.text-box h1',{delay:400,origin: 'top'});
sr.reveal('.text-box h2',{delay:600,origin: 'top'});
sr.reveal('.text-box p',{delay:1000,origin: 'top'});
sr.reveal('.text-box p',{delay:1000,origin: 'top'});
sr.reveal('.text-box .email',{delay:2000,origin: 'top'});
sr.reveal('.text-box .place',{delay:2500,origin: 'top'});



sr.reveal('.text-center',{delay:200,origin: 'top'});
sr.reveal('.image-row',{delay:400,origin: 'bottom'});
sr.reveal('.vedio-box',{delay:800,origin: 'left'});
sr.reveal('.card',{delay:500,origin: 'top'});
// sr.reveal('.,{delay:800,origin: 'bottom'});
// sr.reveal('.therd',{delay:1200,origin: 'bottom'});
