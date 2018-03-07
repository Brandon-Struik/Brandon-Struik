$( document ).ready(function() {
    var element = $(`
    	<div class="card brown lighten-2">
          <div class="card-image">
            <img class="materialboxed" src="#">
          </div>
          <div class="card-content">
            <span class="card-title"></span>
            <p class="card-description"></p>
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
					newElement.find('.materialboxed')[0].setAttribute('src', 'galery/' +image);

					if(image.split('-')[1]) {
						var description = image.split('-')[1].slice(0,-4);
						$(newElement.find('.card-description')[0]).html(description);
						//newElement.find('.materialboxed')[0].setAttribute('data-caption', description);
					} else {
						title = title.slice(0,-5);
					}
					newElement.find('.materialboxed')[0].setAttribute('data-lightbox', title.replace("/ /g", "-"));
					$(newElement.find('.card-title')[0]).html(title);
					newElement.removeClass('hide');
					var columns = ['#column1', '#column2', '#column3'];
					columns.sort(function(column1, column2) {
						var height1 = (column1? $(column1).height() : 0);
						var height2 = (column2? $(column2).height() : 0);
						return  height1 - height2;
					});
					$(columns[0]).append(newElement.clone());
					$('#mobile-column').append(newElement);
				}
			});
			$('.materialboxed').materialbox();
		}
	});
});

