function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(firstName.value)
    console.log(lastName.value)
    console.log(email.value)
    console.log(message.value)
    closeModal()
})
closeModal()