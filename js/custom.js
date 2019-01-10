
function onclickMenu() {
    document.getElementById('headMenu').classList.toggle('change');

    document.getElementById('custom-top-header').classList.toggle('headerbg');
}

$(window).on('scroll', function() {
			if($(window).scrollTop()) {
				$('header').addClass('custom-head-scrol');
			}
			else {
				$('header').removeClass('custom-head-scrol');
			}
		})
	
	  

