function fetchBooks() {

  fetch('https://anapioficeandfire.com/api/books')
	  .then(function(response) {
	    console.log("== then #1 ==");
	    console.log("response:", response);
	    return response.json();
	  })
	  .then(function(json) {
	    console.log("== then #2 ==");
	    console.log("json:", json);
      renderBooks(json);

	    // for (var i = 0; i < myJson.length; i++) {
	    // 	let nextBook = myJson[i];
		  //   console.log("nextBook.url:", nextBook.url);
		  //   console.log("nextBook.name:", nextBook.name);
		  //   console.log("nextBook.publisher:", nextBook.publisher);
		  //   for (var i = 0; i < nextBook.povCharacters.length; i++) {
		  //   	let nextChar = nextBook.povCharacters[i];
			//     console.log("nextChar:", nextChar);
		  //   };
	    // };

	    // let jsonStr = JSON.stringify(myJson);
	    // console.log("jsonStr:", jsonStr);
	  });
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    console.log("book:", book);
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
