define([
	'backbone'		
], function( Backbone ){
	
	return Backbone.View.extend({
		tagName:'li',
		initialize: function(){
			var self = this;
			this.model.on('change', this.render, this );
			this.render();
			this.$el.click( function(){ self.edit(); });
		},
		render: function(){
			this.$el.html( this.model.getFullName() );
		},
		edit: function(){
			var str = prompt( 'enter new name', this.model.getFullName() );
			if( str ){
				var data = str.split(' ');
				var change = {};
				if( data[0] ) change.firstName = data[0];
				if( data[1] ) change.lastName = data[1];
				if( data[0] || data[1] ){
					this.model.set( change );
				}
			}
		}
	});
});
