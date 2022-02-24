const buttonSearch = () => {
  const carInput = document.getElementById("car-input");
  const error = document.getElementById("error");
  const carText = parseInt(carInput.value);
  const main = document.getElementById("main");
  main.innerHTML='';
  carInput.value = "";
  if (isNaN(carText) || carText == "") {
    error.innerText = "this is a Number";
  } else if (carText <= 0) {
    error.innerText = "this a Negative number";
  } else {
    main.innerHTML='';
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${carText}`)
      .then((res) => res.json())
      .then((data) => displayCard(data.cards));
      error.innerHTML='';
  }
};

const displayCard = (card) => {
 
  card.forEach((car) => {
    const div = document.createElement("div");
    div.classList.add("card")
    div.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${car.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${car.suit}</h5>
          <p class="card-text">Value --${car.value}</p>
          <button  onclick="search('${car.code}')" href="#" class="btn btn-primary">See Ditles</button>
        </div>
      </div>`;

    main.appendChild(div);
  });
};

const search=cards=>{
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
    .then((res) => res.json())
    .then((data) => {
        const allCard=data.cards;
        const shignal=allCard.find(card=>card.cards ===cards)
        console.log(shignal);

    });
}