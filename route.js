

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state({
        name: "home",
        url: "/home",
        templateUrl: "./Template/listaContato.html"
      })
      .state({
        name: "main",
        url: "/main/:name",
        templateUrl: "./Template/main.html",
        controller: "helloworldCtrl"
      });
      
    $urlRouterProvider.otherwise("/home");
});
