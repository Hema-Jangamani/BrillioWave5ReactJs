const Weather=()=>{
    let city =document.getElementById('city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dc8fd5129708daa2870ef3781f164128`)
.then(res=>res.json())
.then(data=>{
       document.getElementById('country').innerHTML=data.country;
    document.getElementById('id').innerHTML=data.id;
    document.getElementById('name').innerHTML=data.name;
    document.getElementById('sunrise').innerHTML=data.sunrise;
    document.getElementById('sunset').innerHTML=data.sunset;
    document.getElementById('timezone').innerHTML=data.timezone;
});
}