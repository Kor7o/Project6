async function getPhotographers() {
  // Récupère les données des photographes depuis le fichier JSON
  return fetch('data/photographers.json')
    .then(response => response.json());
}

async function displayData(media) {
  const mediaSection = document.querySelector(".media_section");
  const lightBoxSection = document.querySelector(".lightbox .carousel");

  media.forEach((media, index) => {
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM(index);
    mediaSection.appendChild(mediaCardDOM);

    const button = mediaCardDOM.querySelector(".media-card-button")

    button.addEventListener("click", function () {
      const modal = document.getElementById("lightbox");
      modal.style.display = "block";
      show(index)
    })

    const like = mediaCardDOM.querySelector(".media-like-button .fa-regular")
      like.addEventListener("click", function (e) {
          console.log(e.target)
          e.target.style.display = 'none'

          const nBLike = mediaCardDOM.querySelector(".media-like-count")
          console.log(nBLike.innerHTML)
          nBLike.innerHTML = Number(nBLike.innerHTML)+1
          const nBtotal = document.querySelector('#totalLikesCount')
          nBtotal.innerHTML = Number(nBtotal.innerHTML)+1
      })

      //unlike
      const unlike = mediaCardDOM.querySelector(".media-like-button .fa-solid")
      unlike.addEventListener("click", function (e) {
          console.log(e.target)
      const faRegular = mediaCardDOM.querySelector(".fa-regular")
      faRegular.style.display = "flex"

          const nBLike = mediaCardDOM.querySelector(".media-like-count")
          console.log(nBLike.innerHTML)
          nBLike.innerHTML = Number(nBLike.innerHTML)-1
          const nBtotal = document.querySelector('#totalLikesCount')
          nBtotal.innerHTML = Number(nBtotal.innerHTML)-1
      })


    const lightBoxModel = lightBoxFactorie(media);
    const lightBoxCardDOM = lightBoxModel.getlightBoxCardDOM();
    lightBoxSection.appendChild(lightBoxCardDOM);
  });
};



async function init() {
  // Récupère les datas des photographes
  const { photographers, media, } = await getPhotographers();
  //displayData(photographers);
  const params = (new URL(document.location)).searchParams;
  const id = params.get('id');
  const profil = photographers.filter(p => p.id == id)[0]
  const mediaProfil = media.filter(m => m.photographerId == id)

  if (profil == undefined) {
    document.location.href = "index.html"
  }

  displayPhotographer(profil)
  displayData(mediaProfil);
  photographFooter(profil.price)
};

function displayPhotographer(profil) {
  console.log(profil)

  const { name, id, city, country, tagline, price, portrait, likes, } = profil;

  const photographHeader = `
    <section class="photograph-header">
      <div class="photograph-info">
        <h1 class="photograph-name">${name}</h1>
        <p class="photograph-location">${city}, ${country}</p>
        <p class="photograph-tagline">${tagline}</p>
      </div>
      <button class="button" id="contactBtn" aria-label="Bouton d'ouverture du modal de contact" onclick="displayModal()">Contactez-moi</button>
      <img class="photograph-img" src="assets/photographers/${portrait}" alt="Photo de ${name}">
    </section>
  `;

  const mainEl = document.querySelector("main");
  mainEl.innerHTML = photographHeader;
}

function photographFooter(object) {
  // Destructuring the photographer info object to extract the photographer price
  const price = object;

  // Calculate total media likes count and store it in a variable
  const mediaLikesCount = document.querySelectorAll(".media-like-count");
  let totalMediaLikesCount = 0;

  mediaLikesCount.forEach((media) => {
    totalMediaLikesCount += Number(media.textContent);
  });

  // Create the HTML for the footer section
  const photographFooter = `
    <aside class="footer">
      <div class="footer-container">
        <span class="footer-likes" id="totalLikesCount">${totalMediaLikesCount}</span>
        <i class="fa-solid fa-heart" id="footer-like"></i>
      </div>
      <p>${price} € / jour</p>
    </aside>
  `;

  // Add the footer section HTML to the footer element
  const footerEl = document.querySelector("footer");
  footerEl.innerHTML = photographFooter;
}

function validateModalForm(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the elements of the modal form & its inputs
  const modalForm = document.getElementById("modalForm");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Check if the form input data is valid & console.log the data as an object
  if (modalForm.checkValidity()) {
    console.log({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
    });
    modalForm.reset();
    closeModal("contactModal");
  }
}



// mettre append ac header
init();