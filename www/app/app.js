angular.module('starter', ['ionic', 'starter.login.controlador', 'starter.home.controlador', 'starter.menu.controlador', 'starter.login.servico', 'starter.home.servico'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position("bottom");


  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'app/visoes/login.html',
    controller: 'LoginController'
  })

  // Each tab has its own nav history stack:

  .state('menu.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'app/visoes/home.html',
        controller: 'HomeController'
      }
    }
  })

  .state('menu', {
    url: '/menu',
    abstract: true,
    templateUrl: 'app/visoes/menu.html',
    controller: 'MenuController'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
