const age = parseInt(prompt("How old are you?")); // prompt == 창 띄울 수 있도록 해줌, 대신 옛날 방식

// "=" means assign, "===" means equal

if (isNaN(age) || age < 0) { // or -> ||
    console.log("Please write a real positive number.");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) { // and -> &&, 18 <= age <=50 can't work
    console.log("You can drink.");
} else if (age >= 51 && age <= 80){
    console.log("You should exercise.");
} else if (age === 100) { // equal -> ===
    console.log("wow you are wise.")
} else if (age > 80){
    console.log("You can do whatever you want.");
}