require( './css.escape' );

/**
 * Renders a card model.
 *
 * @constructor
 * @param {Object} model
 */
function CardView( model ) {
	/**
	 * @member {Object}
	 */
	this.model = model;

	/**
	 * @member {jQuery}
	 */
	this.$el = $( this._render() );
}

/**
 * Compiled template
 * @member {Object}
 */
CardView.prototype.template = require( './card.hogan' );

/**
 * Renders the template using the model attributes.
 *
 * @private
 */
CardView.prototype._render = function () {
	var model = $.extend( {}, this.model );
	model.thumbnailUrl = CSS.escape( model.thumbnailUrl );

	return this.template.render( model );
};

module.exports = CardView;
