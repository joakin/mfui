global.OO = require( 'oojs' );

const test = require( 'ava' );
const CardModel = require( '../CardModel' );

test.beforeEach( t => {
	t.context = new CardModel( {} );
} )

test( 'it emits an event when an attribute has changed', t => {
	t.context.on( 'change', attributes => {
		t.is( attributes.foo, 'bar' );
	} );

	t.context.set( 'foo', 'bar' );
} );

test( "it doesn't emit an event when silenced", t => {
	t.context.on( 'change', () => { throw new Error(); } );

	t.context.set( 'foo', 'bar', true );
} );

test( 'get', t => {
	t.context.set( 'foo', 'bar' );

	t.is( t.context.get( 'x' ), undefined );
	t.is( t.context.get( 'foo' ), 'bar' );
} );
