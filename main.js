// Yell real loud
let yellButton = document.getElementById('yell')
yellButton.addEventListener('click', () => {
  yell()
})

let yell = () => {
  //document.getElementsByClassName("page-header")[0].innerHTML = "HAI-AU BUI"
  document.querySelector(".page-header").innerHTML = "HAI-AU BUI"
}

// Make me fierce
let fierceButton = document.getElementById('fierceify')
fierceButton.addEventListener('click', () => {
  fierceify()
})

let fierceify = () => {
  document.getElementsByTagName("img")[0].src = "wonder-woman.jpg"
}

// Reveal an Easter egg
let easterEggButton = document.getElementById('easter-egg')
easterEggButton.addEventListener('click', () => {
  eggify()
})

let eggify = () => {
  let easterEgg = document.createElement("img")
  easterEgg.src = "easter-eggs.jpg"
  easterEgg.width = 400
  easterEgg.height = 300
  //can set border here 
  easterEgg.style.border = "5px solid red"
  easterEgg.alt = "easter eggs"
  document.querySelector("body").appendChild(easterEgg)
}

// Select the first paragraph in the document
let selectMeButton = document.getElementById('select-me')
selectMeButton.addEventListener('click', () => {
  selectFirstParagraph()
})

let selectFirstParagraph = () => {
  document.getElementById("firstParagraph").classList.add("selected")
  //document.querySelector("p").classList += "selected"
}

// Deselect the first paragraph in the document
let deselectMeButton = document.getElementById('deselect-me')
deselectMeButton.addEventListener('click', () => {
  deselectFirstParagraph()
})

let deselectFirstParagraph = () => {
  document.getElementById("firstParagraph").classList.remove("selected")
}

// Toggle the visibility of the image of your face
let toggleFaceButton = document.getElementById('toggle-my-face')
toggleFaceButton.addEventListener('click', () => {
  toggleMyFace()
})

let toggleMyFace = () => {
  // if (document.getElementById("myPic").classList.contains("hidden")) {
  //   document.getElementById("myPic").classList.remove("hidden")
  // } else {
  //   document.getElementById("myPic").classList.add("hidden") 
  // }
  document.getElementById("myPic").classList.toggle("hidden")
}

// Reload page when reload button is clicked -- no need to modify anything here!
let reloadButton = document.getElementById('reload')

reloadButton.addEventListener('click', () => {
  location.reload()
})
