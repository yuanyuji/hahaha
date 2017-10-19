/**
 * Created by weihongkang on 2017/10/18.
 */
app.factory('shopServer',['ajaxServer',function(ajaxServer){
    return {
        getShop:function(){
            return ajaxServer.ajax('get','Data/data.json')
        }
    }
}]);