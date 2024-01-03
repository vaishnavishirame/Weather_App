let apikey = "13d51a746e062468ce4baaa01b0fd2ca" ;
let apiUrl = "https://home.openweathermap.org/api_keys" ;
let city ;
let userCity = document.getElementById("userText") ;
let temperature = document.getElementById("temp") ;
let ct = document.getElementById("city") ;
let humidity = document.getElementById("humidity_info") ;
let windInfo = document.getElementById("wind_info") ;
let weatherImage = document.querySelector(".weather_img") ;

async function getWeatherData()
{
    if(userCity.value=="")
    {
        alert("ENTER A CITY NAME")
    }
    else{
        city = userCity.value ;
        // console.log(city) ;
        let response  = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`) ;
        let data  = await response.json() ;
        // console.log(data) ;
        ct.innerHTML = data.name ;
        temperature.innerHTML = Math.round(data.main.temp - 273.15)+ "°C" ;
        humidity.innerHTML = data.main.humidity + "%" ;
        windInfo.innerHTML = data.wind.speed + "km/h" ;
        userCity.value="";
        if(data.weather[0].main=="Clear"){
            weatherImage.src="clear.png";
        }else if(data.weather[0].main=="Snow"){
            weatherImage.src="snow.jpg";
        }
        else if(data.weather[0].main=="Clouds"){
            weatherImage.src="cloudy.jpeg";
        }else if(data.weather[0].main=="Drizzle"){
            weatherImage.src="drizzle.jpg";
        }else if(data.weather[0].main=="Mist"){
            weatherImage.src="mist.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherImage.src="rain.png";
        }
        console.log(data)
    }
    
}




