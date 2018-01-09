$( document ).ready(function() {
    var element = $($('#imageGalery').children()[0]);
	$.ajax({
		url:'js/data.txt',
		success: function(response) {
			data = response.split("\n");
			data.forEach(function(image) {
				var newElement = element.clone();
				var title = image.split('-')[0];
				var description = image.split('-')[1].slice(0,-4);
				newElement.find('.materialboxed')[0].setAttribute('src', 'images/' +image);
				$(newElement.find('.card-title')[0]).html(title);
				$(newElement.find('.card-description')[0]).html(description);
				newElement.removeClass('hide');
				$('#imageGalery').append(newElement);
			});
		},
		dataType: "json",
		mimeType: "application/json"
	});
});

