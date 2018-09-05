angular.module('demoApp', ['ui.bootstrap'])
    .controller('TabsDemoCtrl', TabsController)
    .directive('sepecialTab', SpecialTab);

function TabsController($scope, $window) {
    $scope.tabs = [{
        title: 'Dynamic Title 1',
        content: 'Dynamic content 1'
    }, {
        title: 'Dynamic Title 2',
        content: 'Dynamic content 2',
        disabled: true
    }];

       
        $scope.cartArr = [];
        $scope.invoice = [];

    // Default list Call

        $scope.services = [
        {
            name: 'Product ONE',
            price: 300,
            active:true
        },{
            name: 'Design',
            price: 400,
            active:false
        },{
            name: 'Integration',
            price: 250,
            active:false
        },{
            name: 'Training',
            price: 220,
            active:false
        }
    ];  

    $scope.displayone = function(){

                $scope.services = [
                {
                    name: 'Product ONE',
                    price: 300,
                    active:true
                },{
                    name: 'Design',
                    price: 400,
                    active:false
                },{
                    name: 'Integration',
                    price: 250,
                    active:false
                },{
                    name: 'Training',
                    price: 220,
                    active:false
                }
            ];
     };

     $scope.displaysec = function(){

        $scope.services = [
        {
            name: 'Product TWO ',
            price: 300,
            active:true
        },{
            name: 'Design 2',
            price: 400,
            active:false
        },{
            name: 'Integration 2',
            price: 250,
            active:false
        },{
            name: 'Training 2',
            price: 220,
            active:false
        }
    ];

     };

    $scope.displaythird = function(){

        $scope.services = [
        {
            name: 'Product Third',
            price: 300,
            active:true
        },{
            name: 'Design 3',
            price: 400,
            active:false
        }
        
        ];

     };


    $scope.toggleActive = function(s){
        s.active = !s.active;
    };

       
    $scope.removeItemFromCart = function(index)
    {       
        $scope.invoice.splice(index, 1);
    }

    $scope.addToCart = function(datas){
        
        
         $scope.invoice.push({
            qty: 1,
            description: datas.name,
            cost: datas.price
        });
        
    }
    
    $scope.total = function() {

         $scope.itemtotal = [];
         var total = 0;

        // Use the angular forEach helper method to
        // loop through the services array:

        angular.forEach($scope.invoice, function(s){                          
              
                total+= s.cost;                           
        });

        return total;
    };

     
}

function SpecialTab() {
    return {
        restrict: 'A',
        controller: function ($scope) {
            console.log('Special tab ctrl, runs on start.');
            $scope.hello = 'hello from special tab controller';
        }
    }
}

 