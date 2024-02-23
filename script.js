// querySelector container
const container = document.querySelector(".container");
// get the input ele;ent , input value ==> filter on change
// input.addEventListner('onChange', function du filter )

const input = document.querySelector("input");
const select = document.querySelector("select");
const box = document.querySelector(".box");
let fetcheddata;
// fetch data from json file
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    fetcheddata = data;
    displayCountries(data);
    input.addEventListener("change", () => {
      const filter = input.value.toLowerCase();
      console.log(filter);
      const filteredData = data.filter((country) => {
        return country.name.toLowerCase().includes(filter);
      });
      console.log(filteredData);
      displayCountries(filteredData);
    });
    select.addEventListener("change", () => {
      const filter = select.value;
      console.log(filter);
      const filteredData = data.filter((country) => {
        return country.region.includes(filter);
      });
      console.log(filteredData);
      displayCountries(filteredData);
    });
  })
  .catch((e) => console.log("HADI HYA L ERREUR", e));

const displayCountries = (data) => {
  container.innerHTML = "";
  // create boxes
  data.map((country) => {
    let box = document.createElement("div");
    box.innerHTML = `
    <div class="box">
    <div class="taille">
    <img  src=${country.flags.svg} alt="">
    </div>
    <div class="info">
      <h3>${country.name}</h3>
      <div class="stat">
        <p>Population: ${country.population}</p>
        <p>Region: ${country.region}</p>
        <p>Capital: ${country.capital}</p>
      </div>
    </div>
  </div>
    `;
    box.addEventListener("click", () => {
      container.innerHTML = "";
      let details = document.createElement("div");
      details.classList.add("details");
      details.innerHTML = `
      <button onclick='back(fetcheddata)'>back</button>
      
       <div class="info">
      <h3>${country.name}</h3>
      <div class="stat">
        <p>Population: ${country.population}</p>
        <p>Region: ${country.region}</p>
        <p>Capital: ${country.capital}</p>
      </div>
      `;
      container.appendChild(details);
    });
    container.appendChild(box);
  });
};
const back = (data) => {
  displayCountries(data);
  data;
};
