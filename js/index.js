// // Iteration 1: Names and Input

// let hacker1 = "Phil";

// console.log(`The driver's name is ${hacker1}`);

// let hacker2 = "Phil";

// console.log(`The navigator's name is ${hacker2}`)


// // Iteration 2: Conditionals

// let driver = hacker1.length;
// let navigator = hacker2.length;

// if(driver > navigator){
//     console.log(`The driver has the longest name, it has ${driver} characters.`)
// } else if(navigator > driver){
//     console.log(`It seems that the navigator has the longest name, it has ${navigator} characters.`)
// } else {
//     console.log(`Wow, you both have equally long names, ${driver} characters!`)
// }

// // Iteration 3: Loops

// for(let i = 0; i < hacker1.length; i++){
//     console.log(hacker1[i].toUpperCase())
// }

// let navigatorBackwards = ""

// for(let i = hacker2.length -1; i >= 0; i--){
//     navigatorBackwards += hacker2[i];
// }

// console.log(navigatorBackwards)

// let driverFirst = (hacker1.localeCompare(hacker2) < 0)
// let navigatorFirst = (hacker1.localeCompare(hacker2) > 0)

// if(driverFirst){
//     console.log("The driver's name goes first.")
// } else if(navigatorFirst){
//     console.log("Yo, the navigator goes first definitely.")
// } else {
//     console.log("What?! You both have the same name?")
// }

// // BONUS 1

// let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate vitae tellus eu fringilla. Nulla facilisi. Etiam sed mattis nunc. Sed lectus lacus, vehicula ac eros nec, aliquet ornare elit. Cras cursus metus vel tempus lobortis. Mauris posuere lectus eget euismod ornare. Quisque eu eros imperdiet, interdum libero sit amet, eleifend tortor. Pellentesque sed laoreet nisl. Nunc eget odio auctor, ornare ipsum vel, ullamcorper eros. Quisque pharetra hendrerit orci, id tempus orci porta quis. Nulla facilisi. Donec semper arcu a massa tristique, vel maximus sapien scelerisque. Phasellus semper erat vel ipsum vulputate molestie. Maecenas suscipit lacus sed dolor interdum accumsan id sit amet sem. Aenean elit metus, varius id tellus a, imperdiet volutpat dolor. Ut quis justo at orci rhoncus tempus quis ut sapien.

// Mauris gravida diam quis urna posuere finibus. Mauris sem orci, suscipit nec malesuada eget, porta id mauris. Maecenas sagittis id odio eget finibus. Aenean varius augue in tempor euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse placerat finibus scelerisque. Pellentesque vitae erat suscipit, fringilla odio eu, lobortis arcu. Nullam quis eros justo. Aliquam viverra facilisis diam, sit amet tincidunt nisi mollis et. Nam dictum, diam sit amet ullamcorper pellentesque, nunc sapien ullamcorper arcu, sed tincidunt felis odio a augue. Proin fermentum faucibus vehicula. Etiam ut magna ultrices, pellentesque lectus id, laoreet purus. Nunc ac lacus hendrerit, pretium felis eu, hendrerit neque. Vivamus id est sodales, faucibus lorem eu, feugiat diam.

// Maecenas placerat turpis et elementum vestibulum. Nulla eu nulla tincidunt, tincidunt nunc sit amet, rhoncus quam. Proin tempus convallis tortor, sit amet dapibus nisl euismod et. Fusce dignissim eros in nulla dictum cursus. Praesent luctus diam eleifend lorem placerat tempus eu quis elit. Nullam efficitur tempor tortor tincidunt faucibus. Nullam scelerisque dolor at dui euismod aliquam. Suspendisse urna lacus, mattis vitae magna egestas, molestie pretium est. Sed tincidunt sem arcu, nec tristique nisl volutpat in. Aenean iaculis orci metus, sed gravida enim condimentum sed. Nullam dictum ornare quam at faucibus. Etiam vel ultrices quam, at fringilla mauris. Sed ex ante, eleifend ut porttitor ut, auctor vel magna. Donec vel vestibulum purus. Mauris tincidunt nisi consequat massa commodo, non finibus neque congue.`

// let wordsArr = paragraphs.split(" ");
// let sumWords = wordsArr.length;

// console.log(sumWords);

// let etOccurences = "";


// for(let i = 0; i < paragraphs.length; i++){
//     if(wordsArr[i] === "et"){
//         etOccurences++;
//     }
//     }

// console.log(etOccurences)

// BONUS 2

let phraseToCheck = "taco cat";

// One way...

phraseToCheck = phraseToCheck.replace(/[^a-zA-Z0-9 ]/g, '');

let newPhrase = phraseToCheck.split('').reverse().join('');

if(newPhrase.toLowerCase === phraseToCheck.toLowerCase){
    console.log("It's a Palindrome!")
} else {
    console.log("That's no Palindrome!")
}

// Another way...

let phraseForward = "";
let phraseBackward = "";
let newPhraseToCheck = phraseToCheck.replaceAll(" ", "").toLowerCase();

for(i = 0; i < newPhraseToCheck.length; i++){
    phraseForward += newPhraseToCheck[i];
};
for(j=newPhraseToCheck.length-1; j>=0; j--){
    phraseBackward += newPhraseToCheck[j];
};

if(phraseForward === phraseBackward){
    console.log("Got it!")
} else {
    console.log("Err...") }

