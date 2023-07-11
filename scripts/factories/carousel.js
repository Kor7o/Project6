let num1 = 0

//const items = document.querySelectorAll(".item")//

const left = document.querySelector(".left")
const right = document.querySelector(".right")


function show(position) {
    const items = document.querySelectorAll(".item")
    items.forEach(item => {
        console.log(item)
        item.style.display = "none"
    })
    items[num1].style.display = "block"
}

right.addEventListener("click", function (event) {
    const items = document.querySelectorAll(".item")
    console.log("a droite")
    num1++
    if (num1 >= items.length) { num1 = 0 }
    show(num1)

})


left.addEventListener("click", function (event) {
    const items = document.querySelectorAll(".item")
    console.log("a gauche")
    num1--
    if (num1 < 0) { num1 = items.length - 1 }
    show(num1)
})

//show(num1)//