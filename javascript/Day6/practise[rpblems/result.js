const PM=40;
var process1=function(sub1,sub2,sub3){
    var total=sub1+sub2+sub3;
    var avg=total/3;
    var result="FAIL";
    if(sub1>=PM && sub2>=PM && sub3>=PM){
        result="PASS";
    }
    obj1={
        total:total,
        avg:avg,
        result:result
    };
    return obj1;
}
var process2=function(obj1){
    var total=obj1.sub1+obj1.sub2+obj1.sub3;
    var avg=total/3;
    var result="FAIL";
    if(obj1.sub1>=PM && obj1.sub2>=PM && obj1.sub3>=PM){
        result="PASS";
    }
    // obj1.add("total",total);
    // obj1.add("average",avg);
    // obj1.add("result",result);
    Object.defineProperty(obj1,'total',{
        value:total
    })
    Object.defineProperty(obj1,'avg',{
        value:avg
    })
    Object.defineProperty(obj1,'result',{
        value:result
    })
    console.log(obj1)
    return obj1;
}