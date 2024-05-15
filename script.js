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
        img.style.transform = "scale(2)"
    })

    box.addEventListener("mouseleave", (e) => {

        img.style.transformOrigin = "center"
        img.style.transform = "scale(1)"

    })

})

//Função do scroll de ir ao inicio

    const botaoVoltarAoTopo = document.getElementById('voltarAoTopo')

    botaoVoltarAoTopo.addEventListener('click', () => {
        scrollTo({top: 0, behavior: 'smooth'})
    })

    addEventListener('scroll', () => {
        if (scrollY > 100) {
            botaoVoltarAoTopo.style.display = 'block';
        } else {
            botaoVoltarAoTopo.style.display = 'none';
        }
    })

//Função do scroll de ir ao fim

    const botaoIraofim = document.getElementById('Iraofim')

    botaoIraofim.addEventListener('click', () => {
        scrollTo({top: window.document.body.scrollHeight, behavior: 'smooth'})
    })

    addEventListener('scroll', () => {
        if (scrollY > 1000) {
            botaoIraofim.style.display = 'none';
        } else {
            botaoIraofim.style.display = 'block';
        }
    })


//Trabalhando no carrinho





    function adicionarProdutoAoCarrinho(event) {

    }





