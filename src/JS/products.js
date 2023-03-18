$(document).ready(function(){
	$('.slider-list').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        infinity:true,
        autoplaySpeed:3000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        variableWidth:true,
        slidesToShow:3,
        responsive:[
            {
                breakpoint: 768,
				settings: {
					slidesToShow:2
				}
            },{
                breakpoint: 405,
				settings: {
					slidesToShow:1
				}
            }
        ],
        mobileFirst:true
    });
		
});
