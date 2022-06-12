class calculator{
    num1=null;
    num2=null;
    num3=null;
    constructor(num1=0,num2=0){
        this.num1=num1;
        this.num2=num2;
        this.num3=0;
    }
    //getter
    getNum1(){
        return this.num1;
    }
    getNum2(){
        return this.num2;
    }
    getNum3(){
        return this.num3;
    }
    //setter
    setNum1(num1){
        this.num1=num1;
    }
    setNum2(num2){
        this.num2=num2;
    }
    setNum3(num3){
        this.num3=num3;
    }
    //toString
    toString(){
        return this.num1+','+this.num2+","+this.num3;
    }
}

var process=function(calc){
    calc.setNum3(calc.getNum1()+calc.getNum2())
}

var process2=function(calcString){
    var calc=JSON.parse(calcString);
    calc.num3=calc.num1+calc.num2;
    var calcString2=JSON.stringify(calc);
    return calcString2;
}
//Revision:Built in objects in array