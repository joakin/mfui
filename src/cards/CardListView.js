/**
 * View that renders multiple {@link mw.cards.CardView cards}
 *
 * @constructor
 * @param {CardView[]} cardViews
 */
function CardListView( cardViews ) {
	var self = this;

	/**
	 * @member {CardView[]}
	 */
	this.cardViews = cardViews || [];

	/**
	 * @member {jQuery}
	 */
	this.$el = $( this.template.render() );

	// We don't want to use template partials because we want to
	// preserve event handlers of each card view.
	$.each( this.cardViews, function ( i, cardView ) {
		self.$el.append( cardView.$el );
	} );
}

/**
 * Compiled template
 * @member {Object}
 */
CardListView.prototype.template = require( './cards.hogan' );

module.exports = CardListView;
