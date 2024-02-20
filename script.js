// querySelector container
const container = document.querySelector(".container");
// get the input ele;ent , input value ==> filter on change
// input.addEventListner('onChange', function du filter )

// fetch data from json file
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => 
  {
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
      container.appendChild(box);
    });
  }
  )
  .catch((e) => console.log("HADI HYA L ERREUR", e));



