/**
 * Created by weihongkang on 2017/10/18.
 */
app.directive('shop',function(){
    return {
        restrict:"EA",
        templateUrl:"App/Views/temp/_shop.html",
        controller:"shopController",
        /*link:function(scope,ele,attr,controller){

        }*/
    }
});