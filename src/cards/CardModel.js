/**
 * A model of an article.
 *
 * It is the single source of truth about a Card, which is a representation
 * of a wiki page.
 *
 * @deprecated
 *
 * @class mw.cards.CardModel
 * @param {Object} attributes The attributes of the page, e.g. title, URL, etc.
 */
function CardModel( attributes ) {
	/**
	 * @property {Object} attributes of the model
	 */
	this.attributes = attributes;
}

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
