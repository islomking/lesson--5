const countryInput = document.getElementById('countryInput');
const searchButton = document.getElementById('searchButton');
const countryInfo = document.getElementById('countryInfo');

async function fetchCountry(countryName) {
    try {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        const response = await fetch(url);
        const data = await response.json();
        const country = data[0];
        countryInfo.innerHTML = `
            <h2>${country.name.common}</h2>
            <img src="${country.flags.svg}" alt="0">
            <p><strong>Столица:</strong> ${country.capital}</p>
            <p><strong>Население:</strong> ${country.population}</p>
            <p><strong>Регион:</strong> ${country.region}</p>
            <p><strong>Субрегион:</strong> ${country.subregion}</p>
        `;
    } catch (error) {
        console.log('Ошибка загрузки данных:', error);
        countryInfo.innerHTML = `<p>Ошибка загрузки данных. Попробуйте снова.</p>`;
    }
}

searchButton.addEventListener('click', () => {
    const countryNameInput = countryInput.value.toLowerCase().trim();
    if (countryNameInput) {
        fetchCountry(countryNameInput);
        countryInfo.style.display = 'block'
    }
});

countryInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const countryNameInput = countryInput.value.toLowerCase().trim();
        if (countryNameInput) {
            fetchCountry(countryNameInput);
            countryInfo.style.display = 'block';
        }
    }
});