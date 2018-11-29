//On Scroll Functionality
$(window).on('scroll',function(){
	if($(window).scrollTop()){
		$('nav').addClass('black');
	}else{
		$('nav').removeClass('black');
	}
});

//Click Logo To Scroll To Top
$('.logo').on('click',function(){
	$('html,body').animate({scrollTop:0},0);
});

//Toggle Menu
$('.menu-toggle').on('click', function(){
	$('.menu-toggle').toggleClass('closeMenu');
	$('.menu-list').toggleClass('showMenu');
	$('li').on('click', function(){
		$('ul').removeClass('showMenu');
		$('.menu-toggle').removeClass('closeMenu');
		$('.menu-list').removeClass('showMenu');
	});
});

function submitForm (){
	
	function cb(msg){console.log(msg)};

	to = "einkehrreisekreta@gmail.com"
	from = $("#form-email").val()
	title = $("#form-name").val()
	body = "<html><body><h3>"+$("#form-name").val()+ " - " + $("#form-email").val()  +"</h3><p>"+$("#form-msg").val() +"</p></body></html>"
	Email.send(from,to,"einkehrreisekreta",body,{token: "e35b8d5f-252e-4236-a5b8-418afb0aecbc",callback: cb});
	
	title = "Einkehrreisekreta - Thanks"
	body = "Thank you "+  $("#form-name").val() + "! We will contact you soon."
	Email.send(to,from,title,body,{token: "e35b8d5f-252e-4236-a5b8-418afb0aecbc",callback: cb});
	
	$("#form-email").val("")
	$("#form-name").val("")
	$("#form-msg").val("")

}

$(document).ready(function(){   

	 $("#form-contact").submit(function(e){
		e.preventDefault();
	});

	setTimeout(function () {
		$("#cookieConsent").fadeIn(200);
	}, 2000);
	
	$("#closeCookieConsent, .cookieConsentOK").click(function() {
		$("#cookieConsent").fadeOut(200);
	}); 

}); 