function process(id, name, standard, section, sub1, sub2, sub3, sub4){
	var total=calcTotal(sub1,sub2,sub3,sub4);
	var average=calcAverage(total,4);
	var result=calcResult(sub1,sub2,sub3,sub4);
	var grade=calcGrade(average,result);


    var student = {
        stud_id:id,
        stud_name:name,
        stud_stn: standard,
        stud_section: section,
        stud_sub1: sub1,
        stud_sub2: sub2,
        stud_sub3: sub3,
        stud_sub4: sub4,
        stud_total: total,
        stud_average: average,
        stud_result: result,
		stud_grade: grade
    }
    return student;
}
//Expression function,Arrow function
// function calcTotal(sub1,sub2,sub3,sub4){
// 	return sub1+sub2+sub3+sub4
// }

//Function Expression
// var calcTotal=function(sub1,sub2,sub3,sub4){//calcTotal is a pointer 
// 	return sub1+sub2+sub3+sub4
// }

//arrow function

var calcTotal=(sub1,sub2,sub3,sub4)=>sub1+sub2+sub3+sub4
//------------------

// function calcAverage(total,subjects){
// 	//Average
// 	return total/subjects;
// }

//function Expression
// var calcAverage=function(total,subjects){
// 	return total/subjects;
// }

//arrow function
var calcAverage=(total,subjects)=>total/subjects

//------------------

// function calcResult(sub1,sub2,sub3,sub4){
// 		//Result
// 		const PM = 40;
// 		var result = "FAIL";
// 		if((sub1>=PM) && (sub2>=PM) && (sub3>=PM) && (sub4>=PM))
// 			result="PASS";
// 		return result;
// }



//function Expression
// var calcResult=function(){
// 	const PM = 40;
// 	var result = "FAIL";
// 	if((sub1>=PM) && (sub2>=PM) && (sub3>=PM) && (sub4>=PM))
// 		result="PASS";
// 	return result;
// }

//arrow function
var calcResult=()=>{
	const PM = 40;
	var result = "FAIL";
	if((sub1>=PM) && (sub2>=PM) && (sub3>=PM) && (sub4>=PM))
		result="PASS";
	return result;
}
//------------------

// function calcGrade(average,result){
// 		//Grade
// 		var grade=null;
// 		if(result=="PASS"){
// 			if(average>=90)
// 				grade="A+";
// 			else if((average>=75) && (average<90))
// 				grade="A";
// 			else
// 				grade="Other";
// 		}
// 		return grade;
// }

//function Expression
// var calcGrade=function(average,result){
// 	var grade=null;
// 	if(result=="PASS"){
// 		if(average>=90)
// 			grade="A+";
// 		else if((average>=75) && (average<90))
// 			grade="A";
// 		else
// 			grade="Other";
// 	}
// 	return grade
// }

//arrow function
var calcGrade=()=>{
	var grade=null;
	if(result=="PASS"){
		if(average>=90)
			grade="A+";
		else if((average>=75) && (average<90))
			grade="A";
		else
			grade="Other";
	}
	return grade
}
