const API_KEY = `9f9c6d953342254e388b61f039a6d760`;

const searchTemperature = () => {
    const searchField = document.getElementById('search-field').value;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchField}&appid=${API_KEY}&units=metric`;
    fetch(url)
     .then(res => res.json())
     .then(data => displayTemp(data));
}

const changeText = (id, innerText) => {
    document.getElementById(id).innerText = innerText;
}

const displayTemp = temp => {
    changeText('city', temp.name);
    changeText('temperature', temp.main.temp);
    changeText('condition', temp.weather[0].main);

    const url = ` http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}