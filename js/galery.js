$( document ).ready(function() {
    var element = $($('#imageGalery').children()[0]);
	$.ajax({
		url:'js/data.txt',
		success: function(response) {
			data = response.split("\n");
			data.forEach(function(image) {
				if(image){
					var newElement = element.clone();
					var title = image.split('-')[0];
					var description = image.split('-')[1].slice(0,-4);
					newElement.find('.materialboxed')[0].setAttribute('src', 'galery/' +image);
					$(newElement.find('.card-title')[0]).html(title);
					$(newElement.find('.card-description')[0]).html(description);
					newElement.removeClass('hide');
					$('#imageGalery').append(newElement);
				}
			});
		}
	});
});

