//Global
const baseUrl = "http://localhost:3000"
const newRamenForm = document.getElementById('new-ramen')
const ramenMenu = document.getElementById('ramen-menu')

document.addEventListener("DOMContentLoaded", function() {
  getRamens()
})

newRamenForm.addEventListener('submit', addSubmitListener)

function getRamens() {
  fetch(`${baseUrl}/ramens`)
  .then(respnse => respnse.json())
  .then(ramen => displayRamens(ramen))
}

function displayRamens (ramens) {
  ramens.forEach(ramen => {
    displayRamen(ramen)
  })
}

function displayRamen(ramen) {
  const ramenImgHolder = document.createElement('img')
  ramenImgHolder.src = ramen.image
  ramenMenu.append(ramenImgHolder)
  ramenImgHolder.addEventListener('click', () => handleClick(ramen))
}

function handleClick(ramen) {
  document.querySelector('.detail-image').src = ramen.image
  document.querySelector('.name').textContent = ramen.name
  document.querySelector('.restaurant').textContent = ramen.restaurant
  document.querySelector('#rating-display').textContent = ramen.rating
  document.querySelector('#comment-display').textContent = ramen.comment
 }

function addSubmitListener(event) {
  event.preventDefault()
  const newRamenItem = {
    name: event.target.name.value,
    restaurant: event.target.restaurant.value,
    image: event.target.image.value,
    rating: event.target.rating.value,
    comment: event.target["new-comment"].value,
  }

  displayRamen(newRamenItem);
 }

// function main() {
//   displayRamen()
//   addSubmitListener()
//  }

// main()


