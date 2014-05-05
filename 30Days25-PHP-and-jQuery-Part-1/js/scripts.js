var Actors = {
	init: function( config ) {
		this.config = config;
		this.bindEvents();
		
	},
	bindEvents: function() {
		this.config.letterSelection.on ( 'change', this.fetchActors );
		
	},
	
	fetchActors: function() {
		console.log('fetching');
	}
};

Actors.init( {
	letterSelection: $('#q')
	
	
});