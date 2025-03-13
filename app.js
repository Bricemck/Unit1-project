const requestElement = document.getElementById('request');
const inputElement = document.getElementById('input')
const likeButtonElement = document.getElementById('like-button')
const displayArticle = document.getElementById('article');
const blogToggle = document.getElementById('blog-button')
const imgCaption = document.querySelector('#founder img')
const innerText = document.querySelector('.innerText p')

let isImgDisplay = false

console.log(imgCaption)

imgCaption.addEventListener('mouseover', () => {

    if (isImgDisplay === false) {
        innerText.style.display = 'block';
        isImgDisplay = true
        return
    }
    if (isImgDisplay === true) {
        innerText.style.display = "none"
        isImgDisplay = false
    }
});

let isDisplay = true

blogToggle.addEventListener('click', () => {

    if (isDisplay === true) {
        displayArticle.style.display = 'none'
        isDisplay = false
        return
    }
    if (isDisplay === false) {
        displayArticle.style.display = 'block'
        isDisplay = true
    }
});


let likesCount = 0;
const handleLike = () => {
    likesCount = likesCount +1;
    likeButtonElement.textContent =`${likesCount} likes. like this post!`;
}
likeButtonElement.addEventListener('click', handleLike);



requestElement.addEventListener('click', () => {
    
    let customerInput = inputElement.value ;
    console.log(customerInput);
    alert(`We have received your input ${customerInput}. Look for our response within two business days`)});




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




//     if (displayArticle.hasAttribute('hidden') === false) {
//     displayArticle.classList.add('hidden')

// }  
//     else if (displayArticle.hasAttribute('hidden') === true) {
//         displayArticle.classList.remove('hidden')
//     }

// likeButtonElement.addEventListener('click', () => {
//     console.log('you clicked me')
// }
// )
// unused prototypes

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


