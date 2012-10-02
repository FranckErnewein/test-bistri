define([
	'core/model/BaseModel'
], function( BaseModel ){

	return BaseModel.extend({
		idAttribute: 'bistriId',
		getFullName: function(){
			return this.get('firstName') + ' ' + this.get('lastName');
		}
	});

});


