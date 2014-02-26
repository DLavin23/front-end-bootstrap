$(document).ready(function(){
	// Toggle Menu
	$('body').addClass('js');
	$menu = $('#menu');
	$menulink = $('.menu-link');

	$menulink.on('click', function(){
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
		return false;
	});

	// Toggle Susy Grid
	$toggleGrid = $('#js-toggle-grid');
	$gridRow = $('.g-row');

	$toggleGrid.on('click', function(){
		$gridRow.toggleClass('grid-background');
	});

	// Toggle Accordion
	$tab = $('.tab');

	$tab.on('click', function(e){
		e.preventDefault();
		$this = $(this);
		$this.toggleClass('active');
		$this.next('.panel').toggleClass('active');
	});

	// To enable fancybox uncomment code below
	// =======================================
  // $(".fancybox").fancybox({
  //   maxHeight: 960,
  //   maxWidth: 960,
  //   fitToView : true,
  //   autoSize  : true,
  //   type: 'ajax',
  //   closeClick  : false
  // });
});
