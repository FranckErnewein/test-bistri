define([
	'core/model/Bister',
	'core/collection/Contacts'
], function( Bister, Contacts ){

	return Bister.extend({

		path: 'auth/login',

		initialize: function(){
			this.contacts = new Contacts();
			this.contacts.user = this;
		},

		login: function( login, pwd ){
			var self = this;
			return this.query({
				data:{
					login: login,
					password: pwd
				},
				type: 'POST'
			}).done( function( rep ){
				if( !rep.error && rep.data && rep.data.userInfo){
					self.set( rep.data.userInfo );
					self.set({'loginToken': rep.data.loginToken});
				}
			});
		}





	});

});
