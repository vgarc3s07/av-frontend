//Iniciando no javascript

const boxes = document.querySelectorAll(".product-box")
//
boxes.forEach(box => {

    const img = box.querySelector(".product-image")
//
    box.addEventListener("mousemove", (e) => {
        const x = e.clientX - box.getBoundingClientRect().left
        const y = e.clientY - box.getBoundingClientRect().top

        console.log(x, y)

        img.style.transformOrigin = `${x}px ${y}px`
        img.style.transform = "scale(1.5)"
    })

    box.addEventListener("mouseleave", (e) => {

        img.style.transformOrigin = "center"
        img.style.transform = "scale(1)"

    })

})

