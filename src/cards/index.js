var mfui = require( '../init' );

require( './styles.less' );

/**
 * @namespace
 */
mfui.cards = module.exports = {
	CardView: require( './CardView' ),
	CardListView: require( './CardListView' ),
	CardsGateway: require( './CardsGateway' )
};
