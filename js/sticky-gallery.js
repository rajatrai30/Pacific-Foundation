$(document).ready(function(){
	$('.fa-bars').click(function(){
		$(this).toggleClass('fa-times');
		
		$('#navbar').toggleClass('nav-toggle');
	});
	
	$(window).on('load scroll',function(){
		$('.fa-bars').removeClass('fa-times');
		$('#items').removeClass('nav-toggle');
	
		
    	$('#navbar').css({'background':'linear-gradient(90deg, #ffffff, #23A6D5, #23D5AB)','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
			

	
	if($(window).scrollTop() > 30){
		$('#toggle').css({'visibility':'hidden'});
		
	  }
	  else{
		$('#toggle').css({'visibility':'visible'});
	  	}
  });

    //click to scroll top
    $('.move-up span').click(function(){
        $('html,body').animate({   
            scrollTop: 0        
        }, 10);

    }) 

});
		