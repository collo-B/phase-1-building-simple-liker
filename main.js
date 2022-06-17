// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector("#modal");



const click = (event) =>{
  const roho = event.target
  roho.innerText = EMPTY_HEART
  mimicServerCall()
    .then( res => {
      if(roho.innerText === EMPTY_HEART){
        roho.innerText = FULL_HEART
        roho.classList.add("activated-heart")
      }
      else{
        roho.innerText = EMPTY_HEART
        roho.classList.remove("activated-heart")
      }
      
      
    })
    .catch(error => {
      modal.classList.remove("hidden");
      modal.querySelector("#modal-message").textContent = error;
      setTimeout( () => {
        modal.classList.add("hidden")
      }, 3000)
    }) 
   
}


const hearts = document.querySelectorAll(".like-glyph");
hearts.forEach( heart => {
  heart.addEventListener("click", click)
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
