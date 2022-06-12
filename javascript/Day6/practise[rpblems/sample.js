var add=function(num1,num2){
    var obj={
        n1:num1,
        n2:num2,
        n3:num1+num2,
    }
    return obj
}
var add2=function(obj2){
    obj2.num3=obj2.n1+obj2.n2;
    return obj2;
}

