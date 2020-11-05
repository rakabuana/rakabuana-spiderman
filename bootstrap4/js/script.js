// event pada saat link
$('.page-scroll').on('click', function(e){
 
 	// ambil isi href
 	var tujuan = $(this).attr('href');
 	// tangkap elemen ybs
 	var elemenTujuan = $(tujuan);

 	// pindahkan scroll
 	$('html, body').animate({
 		scrollTop: elemenTujuan.offset().top - 50
 	}, 1000, 'easeInOutExpo');
 

 	e.preventDefault();
 	
 	
});



// parallax
// about
$(window).on('load', function() {
	$('.pKiri, .pKanan').addClass('pMuncul')


})


$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});
	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/1 +'%)'
	});
	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/0.5 +'%)'
	});
	// akhir jumbotron




	// portofolio
	if ( wScroll > $('.portofolio').offset().top -300 ) {
		$('.portofolio .col-sm-4').each(function(i) {
			setTimeout(function() {
				$('.portofolio .col-sm-4').eq(i).addClass('muncul');
			}, 300 * i);
		});


		
	}
});