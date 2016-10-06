var inherits = require( 'inherits' );
var EventEmitter = require( 'events' ).EventEmitter;

/**
 * Model for an article
 * It is the single source of truth about a Card, which is a representation
 * of a wiki article. It emits a 'change' event when its attribute changes.
 * A View can listen to this event and update the UI accordingly.
 *
 * @class mw.cards.CardModel
 * @extends EventEmitter
 * @param {Object} attributes article data, such as title, url, etc. about
 *  an article
 */
function CardModel( attributes ) {
	EventEmitter.call( this );
	/**
	 * @property {Object} attributes of the model
	 */
	this.attributes = attributes;
}
inherits( CardModel, EventEmitter );

/**
 * Set a model attribute.
 * Emits a 'change' event with the object whose key is the attribute
 * that's being updated and value is the value that's being set. The event
 * can also be silenced.
 *
 * @param {String} key attribute that's being set
 * @param {Mixed} value the value of the key param
 * @param {Boolean} [silent] whether to emit the 'change' event. By default
 *  the 'change' event will be emitted.
 */
CardModel.prototype.set = function ( key, value, silent ) {
	var event = {};

	this.attributes[ key ] = value;
	if ( !silent ) {
		event[ key ] = value;
		this.emit( 'change', event );
	}
};

/**
 * Get the model attribute's value.
 *
 * @param key attribute that's being looked up
 * @returns {Mixed}
 */
CardModel.prototype.get = function ( key ) {
	return this.attributes[ key ];
};

module.exports = CardModel;
