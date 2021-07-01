console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
fetch("https://dog.ceo/api/breeds/image/random" )
    .then(res => res.json)
    .then(data => console.log(data))
// fetches the images using the URL 
// parses the response as JSON 
//adds image element to the DOM for each image in the array 