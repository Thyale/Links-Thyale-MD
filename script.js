function mudar() {
  var corpo = window.document.querySelector("body")
  var borda = window.document.querySelector("img.img")
  var pnome = window.document.querySelector("p.pnome")
  var lua = window.document.querySelector("span#dark")
  var sol = window.document.querySelector("span#claro")
  var git = window.document.querySelector("a#git")
  var linkedin = window.document.querySelector("a#linkedin")
  var portifolio = window.document.querySelector("a#portifolio")

  if (corpo.style.backgroundImage.includes("escuro.png")) {
    corpo.style.backgroundImage = 'url("./img/claro.png")'
    borda.style.borderColor = "black"
    pnome.style.color = "black"
    sol.style.display = 'none'
    lua.style.display = 'Block'
    lua.style.color = 'black'
    git.style.color = 'Black'
    git.style.borderColor = "black"
    linkedin.style.color = "Black"
    linkedin.style.borderColor = "black"
    portifolio.style.color = "Black"
    portifolio.style.borderColor = "black"
  } else {
    corpo.style.backgroundImage = 'url("./img/escuro.png")'
    borda.style.borderColor = "White"
    pnome.style.color = "white"
    sol.style.display ='Block'
    lua.style.display = "none"
    git.style.color = "white"
    git.style.borderColor = "white"
    linkedin.style.color = "white"
    linkedin.style.borderColor = "white"
    portifolio.style.color = "white"
    portifolio.style.borderColor = "white"
  }
}
