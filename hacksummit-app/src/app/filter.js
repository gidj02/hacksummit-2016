angular.module('agile')

.filter('fromNow', function (){
    return function(date){
        return moment(date, "'YYYY-MM-DD h:mm:ss a'").fromNow();
    }
})

.filter('convertTimeStamp', function (){
    return function(date){
        return moment(date).format("MMMM D, YYYY");
    }
})

.filter('convertDatetoString', function (){
    return function(date){
        return moment(date).format("MMM Do");
    }
})

.filter('now', function (){
    return function(date){
        return moment().format("MMM DD, YYYY");
    }
})

.filter('convertFormatOne', function (){
    return function(date){
        return moment(date).format("MMM DD, YYYY");
    }
})

.filter('castToInt', function (){
    return function(value){
        return parseInt(value);
    }
});