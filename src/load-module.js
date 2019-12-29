const initialLoad = function() {
  var content = document.getElementById('content')

  var header = document.createElement('h1')
  header.textContent = "nagaremono's"
  content.appendChild(header)

  var fishImage = document.createElement('img')
  fishImage.setAttribute("src", "../grilled-fish.jpg")
  content.appendChild(fishImage)

  var shortInvitation = document.createElement('h2')
  shortInvitation.textContent = "Providing you with the most delicious and fresh fish everyday"
  content.appendChild(shortInvitation)
}

export { initialLoad }