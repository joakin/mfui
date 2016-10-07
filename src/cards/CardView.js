require( './css.escape' );

/**
 * Renders a card model.
 *
 * @class mw.cards.CardView
 * @param {mw.cards.CardModel} model
 */
function CardView( model ) {
	/**
	 * @property {mw.cards.CardModel}
	 */
	this.model = model;

	/**
	 * @property {jQuery}
	 */
	this.$el = $( this._render() );
}

/**
 * @property {Object} compiled template
 */
CardView.prototype.template = require( './card.hogan' );

/**
 * Renders the template using the model attributes.
 *
 * @ignore
 */
CardView.prototype._render = function () {
	var attributes = $.extend( {}, this.model.attributes );
	attributes.thumbnailUrl = CSS.escape( attributes.thumbnailUrl );

	return this.template.render( attributes );
};

module.exports = CardView;
