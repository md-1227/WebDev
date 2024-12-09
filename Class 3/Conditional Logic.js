function checkEligibility(age){
    if(age >= 60){
        console.log("Eligible to vote and eligible for senior citizen benefits.");
    } else if (age >= 18){
        console.log("Eligible to vote.");
    } else {
        console.log("Not eligible to vote.");
    }
}

let age = 15;
checkEligibility(age);