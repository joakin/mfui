const test = require( 'ava' );
const CardModel = require( '../CardModel' );

test( 'get', t => {
	const model = new CardModel( {
		'foo': 'bar'
	} );

	t.is( model.get( 'x' ), undefined );
	t.is( model.get( 'foo' ), 'bar' );
} );
