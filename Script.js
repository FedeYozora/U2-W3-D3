fetch("https://striveschool-api.herokuapp.com/books")
  .then(response => response.json())
  .then(data => {
    data.forEach(book => {
      let card = `<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                  <div class="card h-100">
                     <img src="${book.img}" class="card-img-top img-responsive" alt="${book.title}">
                     <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">Prezzo: ${book.price} $</p>
                         <button class="btn btn-primary" id="discard">Scarta</button>
                         <button class="btn btn-success" id="addCart">Compra</button>
                     </div>
                    </div>
                </div>`;
      document.querySelector(".row").innerHTML += card;
    });
  });

document.addEventListener("click", function (event) {
  if (event.target.matches("#discard")) {
    event.target.closest(".col-12").remove();
  }
});
