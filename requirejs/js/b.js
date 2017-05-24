/**
 * Created by lenovo on 2017/2/19.
 */
define(['c'],function(isArray){
    function arraySort(arr){
       if(!isArray(arr)){
           return '不是数组';
       }
        //console.log(!isArray(arr))
      arr.sort(function(a,b){
          return a-b;
      });
        return arr;
    }
     return arraySort;
});