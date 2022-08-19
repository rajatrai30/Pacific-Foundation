$(document).ready(function(){
	$('.fa-bars').click(function(){
		$(this).toggleClass('fa-times');
		
		$('.navbar').toggleClass('nav-toggle');
	});
	
	$(window).on('load scroll',function(){
		$('.fa-bars').removeClass('fa-times');
		$('.nav-items').removeClass('nav-toggle');
	
	if($(window).scrollTop() > 30){
	  $('.navbar').css({'background':'none','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
	  
	}else{
      $('.navbar').css({'background':'none','box-shadow':'none'});
	}

	if($(window).scrollTop() > 30){
		$('.nav-items ul li a').css({'color':'#fff'});
		
	  }else{
		$('.nav-items ul li a').css({'color':'#fff'});
	  }

	
	if($(window).scrollTop() > 30){
		$('.menu-icon, .search-icon, .cancel-icon').css({'color':'#fff'});
		
	  }else{
		$('.menu-icon, .search-icon, .cancel-icon').css({'color':'#fff'});
	  }

	if($(window).scrollTop() > 30){
		$('.nav-items ul li a:before').css({'content':'','position':'absolute', 'top':'0','left':'0', 'width':'100%', 'height':'100%', 'border-bottom': '2px solid #0f0931', 'opacity': '0', 'transition': '.5s'});
		
	  }else{
		$('.nav-items ul li a:before').css({'color':'#0f0931'});
	  }
  });

    //click to scroll top
    $('.move-up span').click(function(){
        $('html,body').animate({   
            scrollTop: 0        
        }, 1000);

    }) 
});

if($("..swiper-container").hasClass("team-member-slider")){
	var swiper = new Swiper('.swiper-container', {
		slidesPerView:3,
		allowTouchMove: true,
		loop:true,
		centeredSlides:true,
		slideToclickedslide:true,
		effect: "coverflow",
		grabcursor:true,
		autoplay:false,
		navigation:{
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-next',
		},
		coverflow: {
			rotate:0,
			stretch:100,
			depth:200,
			modifier:1,

		},
		breakpoints: {
			767: {
				slidesPerView:1,
				centeredSlides:false,
				effect: "slide",
			}
		}
	});
}

$("#work").magnificPopup({
	delegate:'a',
	type: 'image',
	gallery:{
		enabled:true
	}
});

function myFunction() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more";
	  moreText.style.display = "none";
	  moreText.style.transition= "0.5s";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	  moreText.style.transition= "0.5s";
	}
}


function myFunction1() {
	var dots = document.getElementById("dots-1");
	var moreText = document.getElementById("more-1");
	var btnText = document.getElementById("myBtn-1");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
}

function myFunction2() {
	var dots = document.getElementById("dots-2");
	var moreText = document.getElementById("more-2");
	var btnText = document.getElementById("myBtn-2");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
}

function myFunction3() {
	var dots = document.getElementById("dots-3");
	var moreText = document.getElementById("more-3");
	var btnText = document.getElementById("myBtn-3");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
}
