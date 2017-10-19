/**
 * Created by weihongkang on 2017/10/18.
 */

//工厂模式
app.factory("ajaxServer",function($http,$q){
   server= {
        ajax:function(type,url,data){
            var defer = $q.defer();
            if(type=='jsonp'||type=='JSONP'){
                $.ajax({
                    url:url,
                    dataType:"jsonp",
                    success:function(res){
                        defer.resolve(res);
                    },
                    error:function(err){
                        defer.reject(err);
                    }
                });
                return defer.promise;
            }else{
                $http({
                    url:url,
                    method:type||'get',
                    data:data||null
                }).then(function(res){
                    defer.resolve(res);
                },function(err){
                    defer.reject(err);
                })
            }
            return defer.promise;
        }
    };
    return server;
});