require('script!jquery/dist/jquery.min.js');

var cards = require('../');

for (var i = 1; i < 7; i++) {
	var views = []
	for (var j = 0; j < i; j++) {
		views.push(
			new cards.CardView({
				title: 'Cute cat ' + i,
				hasThumbnail: true,
				thumbnailUrl: 'http://placekitten.com/g/200/300',
				url: 'http://placekitten.com',
				extract: 'So cute ' + i
			})
		);
	}
	var title = document.createElement('h2');
	title.textContent = 'With ' + j + ' cards';
	document.body.appendChild(title)
	document.body.appendChild(
		new cards.CardListView(views).$el.get(0)
	);
}
