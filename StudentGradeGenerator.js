//User prompt to input student marks
let marks;
//Input check
if(marks >= 0 && marks <= 100){
    let grade;
    if(marks > 79){
        grade = "A";
    }else if(marks>= 60){
        grade = "B";
    }else if (marks >= 50){
        grade = "C";
    }else if(marks>=40){
        grade = "D";
    }else {
        grade = "E";
    }
    //grade output
    console.log("Grade:", grade);
}else{
    console.log("Invalid input. Please enter a valid number")
}

