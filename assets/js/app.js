const APIKEYS = '35225eb75b3a4be5489b60b6eb2f2b48';
let resultsAPI;

if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(position =>{
        //console.log(position);
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        AppelAPI(long,lat);

    }, () => {
        alert(`Vous avez refusé la géolocalisation, l'application ne peut pas fonctionner, veillez l'activer.!`)
    })
}

function AppelAPI(long, lat)
{
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${APIKEYS}`)
    .then((response) => {
        return response.json(); 
    })
    .then((data) => {
        console.log(data);
    })
}