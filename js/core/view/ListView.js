define([
	'backbone'
], function( Backbone ){
		
	return Backbone.View.extend({
		tagName: 'ul',	
		className: 'list-view',
		initialize:function(){
			if( !this.collection  ){
				throw new ReferenceError( 'ListView require a collection' );
			}
			if( !this.options.subView ){
				throw new ReferenceError( 'ListView require a subView' );
			}

			this._map = {};
			this.collection.on( 'add', this.add, this );
			this.collection.on( 'reset', this.redraw, this);
		},
		add: function( model ){
			var view = new this.options.subView({model: model});
			this.$el.append( view.el );
			this._map[ model.id ] = view;
		},
		redraw: function(){
			var self = this;
			this.collection.each( function( model ){
				self.$el.append( self.getViewByModel( model ).el );
			});
		},
		getViewByModel: function( model ){
			return this._map[ model.id ]	
		}
	});
	
});
