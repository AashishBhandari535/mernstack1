class Calculator{
    //instance variable
    firstNum=null;
    secondNum=null;
    thirdNum=null;
    //constructor
    constructor(firstNum,secondNum){
        this.firstNum=firstNum;
        this.secondNum=secondNum;
        this.thirdNum=0;
    }
    //setter,getter and toString
    setFirstNum(firstNum){
        this.firstNum=firstNum;
    }
    setSecondNum(secondNum){
        this.secondNum=secondNum;
    }
    getFirstNum(){
        return this.firstNum;
    }
    getSecondNum(){
        return this.secondNum;
    }
    getThirdNum(){
        return this.thirdNum;
    }
    toString(){
        return (this.firstNum+","+this.setSecondNum+","+this.thirdNum);
    }
};