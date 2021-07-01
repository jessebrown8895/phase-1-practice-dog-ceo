console.log('%c HI', 'color: firebrick')
// challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(data => {
        const imgUrls = data.message
        const container = document.getElementById("dog-image-container")
        for (let i = 0; i < 4; i++) {
        imgUrls[i]
        const element = document.createElement('img')
        element.src = imgUrls[i]

    container.append(element)
    } 
})
// challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
fetch(breedUrl)
.then(response => response.json())
.then(theData => {
    const dogBreedContain = document.getElementById("dog-breeds")
    const dogoBreeds = theData.message
    Object.keys(dogoBreeds).forEach((key) =>{
        const anElement = document.createElement('li')
         anElement.innerText = key
        dogBreedContain.append(anElement)
    anElement.addEventListener("click", e => {
        anElement.style.color = "red"
    })
    })
})
// on page load, fetch all the dog breeds using the url above
/// adds the breeds to the page in the <ul> provided in the index.html

//Challenge 3 
// create some JavaScript code that when the user clicks on any of the <li>'s 
//the color of that <li> changes

