const buttonSearch = document.querySelector('.weather-search-button')
const cityName = document.querySelector('.weather-search-input').value.trim()

const API_KEY = '41cd76f15da873af12194aab4e6c5a80';



console.log(cityName);


async function submitHeandler(){
    if (!cityName) {
        console.log('vvedite city');
    }
    // await getGeo()
}
async function getGeo(params) {
    let geoUrl = `https: api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    const response = await fetch(geoUrl)
    
}
buttonSearch.addEventListener('click', submitHeandler)
