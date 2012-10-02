define([
	'backbone',
	'config'
], function( Backbone, config ){

	return Backbone.Model.extend({
		url: function(){
			return config.wsUrl + this.path ;
		},

		query: function( options ){
			options.data = JSON.stringify( options.data );
			var params = _.extend({
				url: this.url(),
				contentType: 'application/json'
			}, options);

			return $.ajax( params );
		}
	});

});


