function fetchBooks() {
  console.log("== fetchBooks ==");

  // fetch('https://anapioficeandfire.com/api/books')
  //   .then(resp => resp.json())
  //   .then(json => console.log(json));

  fetch('https://anapioficeandfire.com/api/books')
	  .then(function(response) {
	    console.log("-- books response --");
	    console.log("response:", response);
	    return response.json();
	  })
	  .then(function(jsonData) {
	    console.log("== then #2 ==");
	    console.log("jsonData:", jsonData);
      renderBooks(jsonData);
	  });
}

function renderBooks(jsonData) {
  console.log("== renderBooks ==");
  const main = document.querySelector('main')
  jsonData.forEach(book => {
    console.log("book:", book);
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

function fetchHouses() {
  console.log("== fetchHouses ==");

  fetch('https://www.anapioficeandfire.com/api/houses')
	  .then(function(response) {
      console.log("-- houses response --");
	    console.log("response:", response);
	    return response.json();
	  })
	  .then(function(jsonData) {
      console.log("-- houses json --");
	    console.log("jsonData:", jsonData);
      console.log("jsonData.length:", jsonData.length);
      renderHouses(jsonData);
	  });

  function renderHouses(json) {
    console.log("== renderHouses ==");
    const main = document.querySelector('main')
    json.forEach(house => {
      console.log("house:", house);
      // const h4 = document.createElement('h4')
      // h4.innerHTML = `<h4>${house.name}</h4>`
      // main.appendChild(h4)
    })
  }

// }

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  fetchHouses();
})
