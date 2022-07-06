let dogButton = document.querySelector(".dog-generator")
let dogPicture = document.querySelector(".dog-picture")

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => dogPicture.src = data.message)
    .catch(error => console.log(error))


dogButton.addEventListener("click", function(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => dogPicture.src = data.message)
    .catch(error => console.log(error))
})

