
    class Calculator{
        num1=null;
        num2=null;
        num3=null;
        constructor(num1=0,num2=0){
            this.num1=num1;
            this.num2=num2;
            this.num3=0
        }
        getNum1(){
            return this.num1;
        }
        getNum2(){
            return this.num2;
        }
        getNum3(){
            return this.num3;
        }
        setNum1(num1){
            this.num1=num1
        }
        setNum2(num2){
            this.num2=num2
        }
        setNum3(num3){
            this.num3=num3
        }
    }
    var process2=function(calc){
       var result=JSON.parse(calc)
        result.num3=result.num1+result.num2;
       return JSON.stringify(result)
        
    }
