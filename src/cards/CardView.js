require( './css.escape' );

/**
 * Renders a Card model and updates when it does.
 *
 * @class mw.cards.CardView
 * @param {mw.cards.CardModel} model
 */
function CardView( model ) {
	/**
	 * @property {mw.cards.CardModel}
	 */
	this.model = model;

	// listen to model changes and re-render the view
	this.model.on( 'change', this.render.bind( this ) );

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
 * Replace the html of this.$el with a newly rendered html using the model
 * attributes.
 */
CardView.prototype.render = function () {
	this.$el.replaceWith( this._render() );
};

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
