
document.addEventListener("DOMContentLoaded", function(event) {
  console.log( "ready" );

  fetch("./FED_Books.json")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    for (let i = 0; i < data.items.length; i++) {
      let title = data.items[i].volumeInfo.title;
      let author = data.items[i].volumeInfo.authors;
      let image = document.createElement("img");
      image.src = data.items[i].volumeInfo.imageLinks.thumbnail;
      let movieList = document.getElementById("movieList");
      let div = document.createElement('div');
      div.appendChild(image);
      div.appendChild(document.createTextNode(title));
      div.appendChild(document.createTextNode(author));
      movieList.appendChild(div);
    }
  });
});