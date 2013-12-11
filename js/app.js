App = Ember.Application.create();


App.Router.map(function(){
	this.resource('pic', { path : ':pic_id' });
});

App.IndexRoute = Ember.Route.extend({
	model : function(){
		var id = '648aa92bcbb6467aad423f915ea318fc';

		return $.ajax({
				  type: "GET",
				  dataType: "jsonp",
				  cache: false,
				  url: "https://api.instagram.com/v1/media/popular?client_id=" + id
				}).then(function(response){
				  	return response.data;
				});		
	}
});

App.PicRoute = Ember.Route.extend({
	model: function(params) {
		var id = '648aa92bcbb6467aad423f915ea318fc';

		return $.ajax({
				  type: "GET",
				  dataType: "jsonp",
				  cache: false,
				  url: "https://api.instagram.com/v1/media/" + params.pic_id + "?client_id=" + id
				}).then(function(response){
				  	return response.data;
				});	
	}
});
