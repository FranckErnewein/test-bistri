define([
	'backbone',
	'config',
	'core/model/Bister'
], function( Backbone, config, Bister ){
	
	return Backbone.Collection.extend({
		model: Bister,
		initialize: function(){
			this.on( 'change', this.sort, this );
		},
		url: function(){
			return config.wsUrl + 'contact/contacts?loginToken=' + this.user.get('loginToken');
		},
		parse: function( json ){
			return json.data;
		},
		comparator: function( contact ){
			return contact.getFullName().toLowerCase();
		}
	});

});
