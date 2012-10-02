requirejs.config({
	paths: {
		'jquery': 'lib/jquery-1.7.2.min',
		'underscore': 'lib/underscore-min',
		'processing': 'lib/processing-1.4.1-api.min',
		'backbone': 'lib/backbone-min'
	},

	shim: {
		'underscore': { exports: '_' },
		'jquery': { exports: '$' },
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});


define([
	'jquery',
	'core/model/User',
	'core/view/ListView',
	'web/view/Contact'
], function( $, User, ListView, Contact ){

	$(document).ready( function(){
		
		$('form').submit( function(){

			$('ul').remove();		

			window.me = new User();	

			me.login( this.login.value, this.password.value ).done( function(){
				me.contacts.fetch({silent: false});
			});

			window.roaster = new ListView({
				collection: me.contacts,
				subView: Contact
			});
			window.roaster2 = new ListView({
				collection: me.contacts,
				subView: Contact
			});

			$(document.body).append( window.roaster.el );
			$(document.body).append( window.roaster2.el );
			return false;
		});


	});

})
