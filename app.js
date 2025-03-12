const requestElement = document.getElementById('request');
const inputElement = document.getElementById('input')
const likeButtonElement = document.getElementById('like-button')
const displayArticle = document.getElementById('article');
const blogToggle = document.getElementById('blog-button')



blogToggle.addEventListener('click', () => {

    if (displayArticle.hasAttribute('hidden') === false) {
    displayArticle.classList.add('hidden')
}  
else (displayArticle.removeAttribute('hidden'))
});


let likesCount = 0;
const handleLike = () => {
    likesCount = likesCount +1;
    likeButtonElement.textContent =`${likesCount} likes. like this post!`;
}

requestElement.addEventListener('click', () => {
    
    alert("Your request has been recieved, please allow 2 business days for response!")});

const toggleButton = document.getElementById('dark-mode');
const body = document.body;

body.classList.add('light-mode')

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
}   else {
    body.classList.replace('dark-mode', 'light-mode');
    toggleButton.textContent = 'Switch to Dark Mode';
}
});


body.classList.add('light-mode')


likeButtonElement.addEventListener('click', () => {
    console.log('you clicked me')
}
)
likeButtonElement.addEventListener('click', handleLike);


// console.dir(displayArticle)

// displayArticle.addEventListener('click', () => {
//     if (displayArticle.hasAttribute('hidden') === true) {
//         displayArticle.removeAttribute('hidden')
//     }
// });



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


