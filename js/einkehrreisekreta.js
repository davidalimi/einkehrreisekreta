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

	to = "info@einkehrreise-kreta.de"
	from = $("#form-email").val()
	title = "Anmeldung"
	body = "<html><body><h3>Name :"+$("#form-name").val()+ "</h3><p>Email:" + $("#form-email").val()  +"</p><p>Message:"+$("#form-msg").val() +"</p></body></html>"
	Email.send(from,to,title,body,{token: "ee5ca163-1964-4b0c-ad2c-d5da7c8624fd",callback: cb});
	
	title = "Einkehrreise-Kreta - 7 Tage Einkehrreise für Frauen"
	body = `
	<html>
	<body><p>Herzlichen Dank für dein Interesse an unserem Angebot der 7 Tage Einkehrreise für Frauen auf Kreta.</p>
	<p>Wir werden deine Anfrage schnellst möglich beantworten!</p>
	<p>Herzliche Grüße</p>
	<p>Das Team der Einkehrreise-Kreta<br>
	Susanne Prinz & Helga de Bresser</p>
	</body></html>`;

	Email.send(to,from,title,body,{token: "ee5ca163-1964-4b0c-ad2c-d5da7c8624fd",callback: cb});
	
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