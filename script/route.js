define([
	"angularRoute",
	"app",
	"homeCtrl"
	],function(app){
		var initRoute = function(){
			app.config(["$routeProvider",function($routeProvider){
				console.log("init route....");
				$routeProvider
				.when("/",{
					templateUrl:"view/home.html",
					controller:"homeCtrl"
				})
				.when("/home",{
					templateUrl:"view/home.html",
					controller:"homeCtrl"
				})
				.otherwise({

				});
			}]);
		};
		return {init:initRoute};
	});