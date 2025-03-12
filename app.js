const requestElement = document.getElementById('request');
const inputElement = document.getElementById('input')

console.dir(requestElement)
console.dir(inputElement)

requestElement.addEventListener('click', () => {
    
    alert("Your request has been recieved, please allow 2 business days for response!")});


const displayArticle = document.getElementById('article');

console.dir(displayArticle)

displayArticle.addEventListener('click', () => {
    if (displayArticle.hasAttribute('hidden') === true) {
        displayArticle.removeAttribute('hidden')
    }
}

)

// const buttonElement = document.querySelector('button');

// if (buttonElement.hasAttribute('disabled') === true) {
//    buttonElement.removeAttribute('disabled')
//   }

// const button = document.getElementById('#request')


// button.addEventListener("click", function() {
//     alert("Button clicked!");
//   });

// requestElement.addEventListener('click', () => {
//     if (requestButtonElement) {
//         requestButtonElement.textContent = 'Element exists!';
//       } else {
//         console.error('Element does not exist!');
//       }
  
// });


