//how to use existing class
class calc {
    mycalculator = null;//
    //constructor
    constructor(mycalculator=null){
        this.mycalculator=mycalculator;
    }
    //setter
    setMyCalculator(mycalculator){
        this.mycalculator=mycalculator;
    }
    //getter
    getMyCalculator(){
        return this.mycalculator;
    }
    //processing functions
    sum(){
         this.mycalculator.thirdNum=this.mycalculator.getFirstNum()+this.mycalculator.getSecondNum();
    }
}