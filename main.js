function toggleMode() {
    const body = document.body
    const imagem = document.querySelector("#profile img")
    body.classList.toggle("light")

    if (body.classList.contains("light")) {
        imagem.setAttribute("src", "./assets/avatar-light.png")
        imagem.setAttribute(
            "alt",
            "Foto de Gabriel Lopes com óculos de sol sorrindo"
        )
    } else {
        imagem.setAttribute("src", "./assets/avatar.png")
        imagem.setAttribute("alt", "Foto de Gabriel Lopes sorrindo")
    }
}
