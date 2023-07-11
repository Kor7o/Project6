function lightBoxFactorie(data) {
  // Destructuring the data object to extract its properties
  const { id, photographerId, title, image, video, } = data;


  function closeModal() {
    const modal = document.getElementById("lightbox");
    modal.style.display = "none";
  }

  document.querySelector("#lightboxCloseBtn").addEventListener("click", (event) => {
    closeModal()
  })

  closeModal()

  // Defining a function that will return a DOM element for the media card
  function getlightBoxCardDOM() {
    // Create an article element to contain the media card
    const div = document.createElement("div");
    div.className += "item";
    div.id = id;


    // si le media est une image
    if (image) {
      div.innerHTML = `<div>
        <img class="lightbox-card-img" src="assets/images/${photographerId}/${image}" alt="${title}">
        </div>
        <div>
        <h2 class="lightbox-card-title">${title}</h2> 
        </div>
        `;
    }

    // si le media est une video
    if (video) {
      div.innerHTML = `
      <div>
        <video class="lightbox-card-video" title="${title}">
          <source src="assets/images/${photographerId}/${video}" type="video/mp4"></video>
          <div>
        <h2 class="lightbox-card-title">${title}</h2>
    `;
    }

    // Return the article element
    return (div);
  }

  // Returning an object with the getMediaCardDOM function
  return { getlightBoxCardDOM };
}