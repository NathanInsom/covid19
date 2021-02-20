const URL = "https://corona.lmao.ninja/v2/countries/fr";

(async () => {
  const response = await fetch(URL);
  if (response && response.ok) {
    const data = await response.json();

    const confirmed = data.cases;
    document.getElementById("confirmed__number").textContent = confirmed;

    const tests = data.tests;
    document.getElementById("tests__number").textContent = tests;

    const deaths = data.deaths;
    document.getElementById("deaths__number").textContent = deaths;

    const recovered = data.recovered;
    document.getElementById("recovered__number").textContent = recovered;

    const population = data.population;
    document.getElementById("population__number").textContent = population;
  
    const date = new Date(data.updated);
    const last_update = date.toLocaleString();
    document.getElementById("last_update").textContent = last_update;
  }
})();
