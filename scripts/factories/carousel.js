let num1 = 0


const left = document.querySelector(".left")
const right = document.querySelector(".right")

//permet dafficher une image en particulier suivant sa position (tu vas chercher tt les photos sauf celles qu'on veut voir)
function show(position) {
    num1 = position
    const items = document.querySelectorAll(".item")
    items.forEach(item => {
        item.style.display = "none"
    })
    items[num1].style.display = "block"
}

//je selectionne la fleche correspondante
right.addEventListener("click", function (event) {
    const items = document.querySelectorAll(".item")
    num1++
    if (num1 >= items.length) { num1 = 0 }
    show(num1)

})

//je selectionne la fleche correspondante

left.addEventListener("click", function (event) {
    const items = document.querySelectorAll(".item")
    num1--
    if (num1 < 0) { num1 = items.length - 1 }
    show(num1)
})


//fleches 

    // Add an event listener to lightboxModal to switch to the previous/next media on press of left/right arrow keys
    document.addEventListener("keydown", (event) => {
      // Get the lightboxModal element
      const lightboxModal = document.getElementById("lightbox");
      
      // If lightboxModal is open & the left arrow key is pressed, call the previousLightBoxMedia function
      if (lightboxModal.style.display == "block" && event.key === "ArrowLeft") {
        const items = document.querySelectorAll(".item")
    num1--
    if (num1 < 0) { num1 = items.length - 1 }
    show(num1);
      }
  
      // If lightboxModal is open & the right arrow key is pressed, call the nextLightBoxMedia function
      if (lightboxModal.style.display == "block"  && event.key === "ArrowRight") {
        const items = document.querySelectorAll(".item")
        num1++
        if (num1 >= items.length) { num1 = 0 }
        show(num1)
      }
    });
  
    // Add an event listener to the contact & lightbox modal to close the modal on press of ESC button
    document.addEventListener("keydown", (event) => {
      // If lightboxModal is open & the ESC key is pressed, call the closeModal function
      const lightboxModal = document.getElementById("lightbox");
      
      if (lightboxModal.style.display == "block"  && event.key === "Escape") {
        lightboxModal.style.display = "none"
      }
  
      // If contactModal is open & the ESC key is pressed, call the closeModal function
      const contactModal = document.getElementById("contact_modal");
      if (contactModal.style.display == "block"  && event.key === "Escape") {
        contactModal.style.display = "none"
      }
    });