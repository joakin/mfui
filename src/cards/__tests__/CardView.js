require.extensions['.hogan'] = ( mod, file ) => {
	const fs = require( 'fs' );
	const Hogan = require('hogan.js');

	var tpl = fs.readFileSync(file, { encoding: 'UTF-8' } );

	mod.exports = Hogan.compile(tpl);
}

const jsdom = require( 'jsdom' );
const document = jsdom.jsdom('<!doctype html><html><body></body></html>');
const window = document.defaultView;

global.jQuery = global.$ = require('jquery')(window);

const test = require( 'ava' );
const CardView = require( '../CardView' );

test( 'it escapes the thumbnailUrl model attribute', t => {
	const model = {
			title: 'One',
			url: '/wiki/One',
			hasThumbnail: true,
			thumbnailUrl: 'http://foo.bar/\');display:none;"//baz.jpg',
			isThumbnailProtrait: false,
		};
	const view = new CardView( model );
	const style = view.$el.find( '.ext-cards-card-thumb' )
			.eq( 0 )
			.attr( 'style' );

		t.is(
			style,
			'background-image: url( \'http\\:\\/\\/foo\\.bar\\/\\\'\\)\\;display\\:none\\;\\"\\/\\/baz\\.jpg\' );'
		);
} );
