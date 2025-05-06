
app.controller("contatoCtrl", function ($scope, $stateParams) {
    
    $scope.message = "Lista telefonica!";
    $scope.name = $stateParams.name;

   $scope.app="Lista Telefonica";
 
   $scope.contatos = [
        {nome: "Lucas", telefone: "123456789"},
        {nome: "João", telefone: "987654321"},
        {nome: "Maria", telefone: "456789123"},
        {nome: "Ana", telefone: "321654987"},
        {nome: "Pedro", telefone: "654321789"},
        {nome: "Carlos", telefone: "789123456"},
        {nome: "Fernanda", telefone: "159753456"},
        {nome: "Roberto", telefone: "753159852"},
        {nome: "Juliana", telefone: "852369741"},
        {nome: "Mariana", telefone: "963258741"},
        {nome: "Ricardo", telefone: "147258369"},
        {nome: "Tatiane", telefone: "258369147"},
        {nome: "Gabriel", telefone: "369258147"},
        {nome: "Larissa", telefone: "159753258"},
        {nome: "Eduardo", telefone: "753159456"},
        {nome: "Sofia", telefone: "852147963"},
        {nome: "Thiago", telefone: "951753852"},
        {nome: "Aline", telefone: "258147369"},
        {nome: "Bruno", telefone: "369147258"},
        {nome: "Vanessa", telefone: "147369258"},
        {nome: "Felipe", telefone: "258369147"},
        {nome: "Patrícia", telefone: "369258147"},
        {nome: "André", telefone: "159753258"},
        {nome: "Camila", telefone: "753159258"},
        {nome: "Rafael", telefone: "852369147"},
        {nome: "Isabela", telefone: "963258159"},
        {nome: "Leonardo", telefone: "147258963"},
        {nome: "Natália", telefone: "258963147"},
        {nome: "Gustavo", telefone: "369147258"},
        {nome: "Juliano", telefone: "147369258"},
        {nome: "Priscila", telefone: "258147963"},
        {nome: "Diego", telefone: "369258147"},
        {nome: "Tatiane", telefone: "159753258"},
        {nome: "Roberta", telefone: "753159258"},
        {nome: "Marcos", telefone: "852147963"},
        {nome: "Amanda", telefone: "951753852"},
        {nome: "Renata", telefone: "258147369"},
        {nome: "Vinícius", telefone: "369147258"},
        {nome: "Cláudia", telefone: "147258369"},
        {nome: "Eduarda", telefone: "258369147"},
        {nome: "Samuel", telefone: "369258147"},
        {nome: "Tatiane", telefone: "159753258"},
        {nome: "Roberta", telefone: "753159258"},
        {nome: "Marcos", telefone: "852147963"},
        {nome: "Amanda", telefone: "951753852"},
        {nome: "Renata", telefone: "258147369"},
        {nome: "Vinícius", telefone: "369147258"},
        {nome: "Cláudia", telefone: "147258369"},
        {nome: "Eduarda", telefone: "258369147"},
        {nome: "Samuel", telefone: "369258147"},
        {nome: "Tatiane", telefone: "159753258"},
        {nome: "Roberta", telefone: "753159258"},
    ];

    

})

