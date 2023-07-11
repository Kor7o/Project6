function photographerFactory(data) {

    // Destructuring the data object to extract its properties
    const { name, id, city, country, tagline, price, portrait, } = data;

    // Creating the path for the portrait image
    const picture = `assets/photographers/${portrait}`;

    // Defining a function that will return a DOM element for the photographer card
    function getUserCardDOM() {

        // Create an article element to contain the photographer card
        const article = document.createElement('article');
        article.className += "photographer-card";

        // Create a link element pointing to the photographer portfolio
        const link = document.createElement("a");
        link.className += "photographer-card-link";
        link.setAttribute("href", `photographer.html?id=${id}`);
        link.setAttribute(
            "aria-label",
            `Lien vers le portfolio de ${name}`
        );
        // Create an image element for the photographer portrait
        const img = document.createElement('img');
        img.setAttribute("src", picture) //j'ai essaye de mettre `picture ${name}` mais ca ne marche pas
        img.className += "photographer-img";
        img.setAttribute("alt", `Photo de ${name}`);

        // Create an image element for the photographer name
        const h2 = document.createElement('h2');
        h2.textContent = name;
        h2.className += "photographer-name";

        // Create a paragraph element for the location
        const location = document.createElement('p');
        location.textContent = `${city}, ${country}`;
        location.className += "photographer-location";

        // Create a paragraph element for the tagline
        const tag = document.createElement('p');
        tag.textContent = tagline;
        tag.className += "photographer-tagline";

        // Create a paragraph element for the rate
        const rate = document.createElement("p");
        rate.textContent = `${price} € / jour`;
        rate.className += "photographer-rate";

        // Append the image and heading to the link element
        link.appendChild(img);
        link.appendChild(h2);

        // Append the link, location, tagline, and rate to the article element
        article.appendChild(link);
        article.appendChild(location);
        article.appendChild(tag);
        article.appendChild(rate);

        // Return the article element
        return (article);
    }

    // Returning an object with the name and picture properties and the getPhotographerCardDOM function
    return { name, picture, getUserCardDOM }
}