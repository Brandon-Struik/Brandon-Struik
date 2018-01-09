$( document ).ready(function() {
    var element = $(`<div class="col s12 m4 hide">
        <div class="card brown lighten-2">
          <div class="card-image">
            <img class="materialboxed" src="#">
          </div>
          <div class="card-content">
            <span class="card-title"></span>
            <p class="card-description"></p>
          </div>
        </div>
      </div>`);
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
			$('.materialboxed').materialbox();
		}
	});
});

