require( './css.escape' );

/**
 * Renders a card model.
 *
 * @class mw.cards.CardView
 * @param {Object} model
 */
function CardView( model ) {
	/**
	 * @property {Object}
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
	var model = $.extend( {}, this.model );
	model.thumbnailUrl = CSS.escape( model.thumbnailUrl );

	return this.template.render( model );
};

module.exports = CardView;
