let ihtml = "";

let url = "https://fakestoreapi.com/products";

let cards = document.getElementById("cards");

let a = fetch(url);
a.then((response) => {
    return response.json();
}).then((value) => {
    console.log(value)
    for (let key in value) {
        ihtml += `<div class="card" style="width: 20rem;">
            <img src="${value[key].image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${value[key].title}</h5>
                    <p class="card-text">Description</p>
                    <p class="card-text">${value[key].description}</p>
                    <p class="card-text"><b>Category:</b> ${value[key].category}</p>
                    <p class="card-text"><b>Ratings:</b> ${value[key].rating.rate}</p>
                    <a href="#" class="btn btn-primary">Buy Now $${value[key].price}</a>
                </div>
                </div>`
        cards.innerHTML = ihtml;
    }
})