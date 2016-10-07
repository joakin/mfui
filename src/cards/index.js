require( './styles.less' );

/**
 * @class mw.cards
 * @singleton
 */
window.mw.cards = module.exports = {
	CardView: require( './CardView' ),
	CardListView: require( './CardListView' ),
	CardsGateway: require( './CardsGateway' )
};
