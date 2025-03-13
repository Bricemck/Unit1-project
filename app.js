//Constant variables for query selectors to get the appropriate IDs and classes.

const requestElement = document.getElementById('request');
const inputElement = document.getElementById('input');
const inputReceived = document.querySelector('#customer-input');
const likeButtonElement = document.getElementById('like-button');
const displayArticle = document.getElementById('article');
const blogToggle = document.getElementById('blog-button');
const imgCaption = document.querySelector('#founder img');
const innerText = document.querySelector('.innerText p');

// Necessary variable for mouseover function.  
// Allows for manipulation of display block and display none.

let isImgDisplay = false

// Mouseover event listener function.
// If I had more time, I'd like to adjust this so that the caption was on
// while the mouse was over the image, then go away when you moved the cursor off.
// Perhaps this could be accomplished with a while loop.

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

// Same logic as the mouseover, but now for hiding the blog.
// Earlier iterations of this code used the 'hidden' attribute.
// However Event Listeners can't listen while it's hidden.  
// This caused the blog to stay hidden.
// Display is much easier to manipulate.
// Return ends the 'display none' so that we can toggle it back to 'display block

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

// Like button code.  This is one of our lessons verbatim.
// LikesCount sets the counter at 0, then the handle like function makes it go up when clicked.
//The Likes button element displays text content inside the button that includes the likes counter.

let likesCount = 0;
const handleLike = () => {
    likesCount = likesCount +1;
    likeButtonElement.textContent =`${likesCount} likes. like this post!`;
}
likeButtonElement.addEventListener('click', handleLike);


// This was the hardest part for me.
// HandleRequest is the function that takes the value from the input Element,
// And returns it into a display below showing that we got the value.

const handleRequest = () => {
    let customerInput = inputElement.value;
    document.getElementById('apples').innerHTML = customerInput
    document.getElementById('apples').value;
    inputElement.value = ''; 
}
requestElement.addEventListener('click', handleRequest);

// Toggle button for dark-mode.
// Button id is dark-mode, we add 'light mode' which is not declared in the html,
// So that we can repalce the dark mode with the toggle.
// I just realized the night before that I might be able to call the default, but I'm not touching the code
// now that it works.

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


//unused code prototypes//

// let listItem = document.createElement('li');
// listItem.textContent = customerInput;
    // inputReceived.appendChild(listItem);
// const handleRequest = () => {
//     let customerInput = inputElement.value ;
//     customerInput.append =`<li>${inputElement}</li>`;
// }
// inputReceived.addEventListener('click', handleRequest);

    
    


    // console.log(customerInput);
    // alert(`We have received your input ${customerInput}. Look for our response within two business days`)});



//  if (displayArticle.hasAttribute('hidden') === false) {
//     displayArticle.classList.add('hidden')

// }  
//  else if (displayArticle.hasAttribute('hidden') === true) {
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