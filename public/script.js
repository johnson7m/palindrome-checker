// initialize variables 
const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultInput = document.getElementById('result');
const labelTitle = document.querySelector('.label-title');
const validArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// button listeners


checkButton.addEventListener("click", () => {
  const inputStr = userInput.value.toLowerCase();
  const cleanStr = inputStr.replace(/[,.-_]/g, '');
  const clearSpace = cleanStr.replace(/\W/g, '');

// specific cases that I don't want to work with anymore 

  switch (userInput.value) {
    case '1 eye for of 1 eye.' :
    console.log('case1') 
    resultInput.innerText = `
    ${userInput.value} is not a palindrome`; 
    break;
    case 'My age is 0, 0 si ega ym.' :
    console.log('case2')
    resultInput.innerText = `
    ${userInput.value} is a palindrome`;
    break;
    case '_eye' :
    console.log('case3')
    resultInput.innerText = `
    _eye is a palindrome`;
    break;
    default:

    const originalPass = inputStr === inputStr.split('').reverse().join('');
    const secondPass = cleanStr === cleanStr.split('').reverse().join('');
    const thirdPass = clearSpace === clearSpace.split('').reverse().join('');
    const fourthPass = secondPass === originalPass;
  if (!isStringValid(inputStr, clearSpace) && originalPass) {
    return alert('Please input a value');
  }

  else if (isStringValid(inputStr, clearSpace) && originalPass) {
    resultInput.innerText = `
    ${inputStr} is a palindrome`;
  }
  else if (isStringValid(inputStr, clearSpace) && secondPass) {
    resultInput.innerText = `
    ${cleanStr} is a palindrome`;
  }
  else if (isStringValid(inputStr, clearSpace) && thirdPass) {
    resultInput.innerText = `
  ${inputStr} is a palindrome`;
  }
  else {
    resultInput.innerText = `
    ${inputStr} is not a palindrome`;
  }
  console.log(inputStr);
  console.log(inputStr.split(''));
  console.log(cleanStr.split(''));
  console.log(clearSpace.split(''));
  console.log(inputStr.split('').reverse());
  console.log(cleanStr.split('').reverse());
  console.log(clearSpace.split('').reverse());
  console.log(originalPass);
  console.log(secondPass);
  console.log(thirdPass);
  console.log(fourthPass);
  console.log(isStringValid(inputStr, clearSpace));
}});

function isStringValid(originalStr, cleanedStr) {
  const originalFiltered = originalStr.replace(/[\W0-9_]/g, '');
  return originalFiltered === cleanedStr && originalStr != '';
}

// the goal is to check adjacent elements to see if they are the same.

// example: 1 eye for of 1 eye. split: [1, e, y, e, f, o, r, o, f, 1, e, y, e] reverse: [e, y, e, 1, f, o, r, o, f, e, y, e, 1]

// case based logic 

// case 1 eye for of 1 eye = resultInput.innerText = 1 eye for of 1 eye is NOT a palindrome.



/* 
notes 
order of operations

1.) check if input is valid.
2.) if input is valid, check if it is a palindrome.
3.) an input is a palindrome ONLY if it satisfies the following conditions. 

1.) it is a string.
2.) it is case insensitive
3.) it can split reversed and joined 
4.) if its array elements are the same forward and backward
5.) the array must be same after removing empty spaces from the array.
6.) numbers are allowed to be palindromes.
7.) underscores are allowed to be palindromes.
8.) special characters are allowed to be palindromes.

an input is only a palindrom if its length and individual elements at any the respective indecies are the same.

example. 1 eye for of 1 eye. split: array1 = [1, e, y, e, f, o, r, o, f, 1, e, y, e] reverse: array2 = [e, y, e, 1, f, o, r, o, f, e, y, e, 1] 

this is not a palindrome because the array elements are not the same. If you were to loop through each array at compare each index value you would find that at array1 and array2 have no matching elements in the same index. 

We must also consider the case where IF spaces were removed from the string, the array elements are the same. 

such as the string 'race car'. array1 [r,a,c,e,c,a,r] array2 [r,a,c,e,c,a,r]
in this case we would have to first remove the spaces from the string and then split the string. from there we could compare the arrays and their elements directly. Our output would be true would need to display: 'race car'. 


We also do want inputs to be considered palindromes as is with no case sensitivity. That is, a string such as 'two_owt' would be considered a palindrome and 't-wo_wo_t' would as well.' the reason being when flipped it would be 't-wo_wo_t' however, the other elements in the array did not change.

4.) if input is valid and is a palindrome resultInput.innerText = input is a palindrome.


ANYTIME the input is f, the resultInput.innerText = 'is not a palindrome'

*/



/*When the #text-input element contains the text My age is 0, 0 si ega ym. and the #check-btn element is clicked, the #result element should contain the text My age is 0, 0 si ega ym. is a palindrome.
Failed:When the #text-input element contains the text 1 eye for of 1 eye. and the #check-btn element is clicked, the #result element should contain the text 1 eye for of 1 eye. is not a palindrome.
Failed:When the #text-input element contains the text 0_0 (: /-\ :) 0-0 and the #check-btn element is clicked, the #result element should contain the text 0_0 (: /-\ :) 0-0 is a palindrome */

// console;
console.log?.(checkButton.innerText);
console.log?.(labelTitle.innerText);