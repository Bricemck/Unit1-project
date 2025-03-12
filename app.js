const requestElement = document.getElementById('request');
const inputElement = document.getElementById('input')
const likeButtonElement = document.getElementById('like-button')
const displayArticle = document.getElementById('article');
let likesCount = 0;
const handleLike = () => {
    likesCount = likesCount +1;
    likeButtonElement.textContent =`${likesCount} likes. like this post!`;
}



console.dir(requestElement)
console.dir(inputElement)

requestElement.addEventListener('click', () => {
    
    alert("Your request has been recieved, please allow 2 business days for response!")});




console.dir(displayArticle)

displayArticle.addEventListener('click', () => {
    if (displayArticle.hasAttribute('hidden') === true) {
        displayArticle.removeAttribute('hidden')
    }
});

likeButtonElement.addEventListener('click', () => {
    console.log('you clicked me')
}
)

likeButtonElement.addEventListener('click', handleLike);

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


