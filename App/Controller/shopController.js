/**
 * Created by weihongkang on 2017/10/18.
 */
app.controller('shopController',['$rootScope','$scope','shopServer',function($rootScope,$scope,shopServer){
    $scope.flag = false;

    shopServer.getShop().then(function(res){
        $scope.shops=res.data;
        price();
    });

    $scope.color = function(index){
        var count = 0;
        $scope.shops[index].bool=!$scope.shops[index].bool;
        for(var i=0;i<$scope.shops.length;i++){
            if($scope.shops[i].bool){
                count++;
            }
        }
        if(count==$scope.shops.length){
            $scope.flag = true;
        }else{
            $scope.flag = false;
        }
        price();
    };

    $scope.all = function(){
        $scope.flag =! $scope.flag;
        for(var i=0;i<$scope.shops.length;i++){
            if($scope.flag){
                $scope.shops[i].bool=true;
            }else{
                $scope.shops[i].bool=false;
            }
        }
        price();
    };

    $scope.del=function(index){
        $scope.shops.splice(index,1);
        price();
    };

    $scope.count=function(index,count){
        if(count=='+'){
            $scope.shops[index].num+=1;
        }else{
            if($scope.shops[index].num<=1) return;
            $scope.shops[index].num-=1;
        }
        price();
    };

    function price(){
        $scope.goodsPrice=0;
        $scope.goodsCount=0;
        $scope.shops.forEach(function(item,index){
            if(item.bool){
                $scope.goodsPrice+=item.num * item.price;
                $scope.goodsCount+=item.num;
            }
        })
    }

}]);