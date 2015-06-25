// Part 1 - The Good (<i>Establishing shot of broken down chuch, Western music plays</i>)

// $('.first-button').click(function(){
// 	$('body').append('<p>This is some new text.</p>');
// });

// $('.another-button').click(function(){
// 	$('body').append('<h1>Some h1 text.</h1>');
// });

// $('.yet-another-button').click(function(){
// 	$('body').append('<ul><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ul>'
// 		);
// });

// Part 2 - The Bad (<i>Establishing shot of saloon, with saloon piano music plays</i>)

// $('p').mouseover(function(){
// 	$(this).addClass('paragraph-hover');
// });

// $('h1').mouseover(function(){
// 	$(this).append('!');
// });

// $('a').click(function(event){
// 	var navConfirm = confirm("Do you want to navigate away from this page?");
// 	if(navConfirm === true){

// 	}
// 	else if (navConfirm === false){
// 		console.log("Test");
// 		event.preventDefault();
// 		$('a').remove();
// 	}
// });


// Part 3 - The Ugly



$(document).on('ready', function(){
	$('.big-button').on('click', function(){
		$('body').append('<div class="pop-up-container"><div class="pop-up"><p>This is a popup. Get used to it.</p><button class="close-btn">Close</button></div></div>');
	});

	$('body').on('click', '.close-btn', function(){
		$('.pop-up-container').hide();
	});
});

