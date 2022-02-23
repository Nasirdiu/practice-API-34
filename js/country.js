const countryLoad = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayLoad(data));
};
countryLoad();

const displayLoad = (countrys) => {
  const countryVAlue = document.getElementById("countrys");
  countrys.forEach((country) => {
    // console.log(country);
    const div = document.createElement("div");
    div.classList.add("countryClass");
    div.innerHTML = `
        <h3>Name:${country.name.common}</h3> <h4>official:${country.name.official}</h4> <p>Area:${country.area}</p> <p>population: ${country.population}</P> Capital :<p>${country.capital}</p> <p><img width="100px" src="${country.flags.svg} "></P>  <button onclick="load('${country.name.common}')">Ditlas</button>
        `;
    countryVAlue.appendChild(div);
  });
};

const load = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => cityLoad(data[0]));
};

const cityLoad = (country) => {
  // console.log( country);
  const countryditles = document.getElementById("country-ditles");

  countryditles.innerHTML = `<h4>Name : ${country.name.common}</h4> <p> coatOfArms :<img width="100px" src="${country.coatOfArms.svg}"></p>`;
};
