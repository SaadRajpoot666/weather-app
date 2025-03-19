const Input = document.querySelector("input")
const City = document.querySelector(".city")
const Temp = document.querySelector(".temperature")
const Latitude = document.querySelector(".lat")
const Longitude = document.querySelector(".lon")
const humidity = document.querySelector(".humidity")
const Pressure = document.querySelector(".pressure")
const speed = document.querySelector(".windspeed")
const degree = document.querySelector(".winddeg")
const btn = document.querySelector("button")
const form = document.querySelector("form")
const a = "lahore"
const Country = document.querySelector(".country")
const maxTemprature = document.querySelector(".max")
const minTemprature = document.querySelector(".min")
const DescriptionOfWeather = document.querySelector(".main")
const Time = document.querySelector(".tim")
form.addEventListener("submit", (e) => {
  e.preventDefault()

  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${Input.value}&appid=2a80c041ce00e9c6107c62d8b3f55e2d&units=metric`

  async function Fetching() {
    const response = await fetch(Url)
    const data = await response.json()
    console.log(data)

    City.innerHTML = data.name
    Temp.textContent = `${data.main.temp}\u00B0 C `
    Country.innerHTML = data.sys.country
    Latitude.innerHTML = `Latitude:${data.coord.lat}\u00B0 N `
    Longitude.innerHTML = `Longitude:${data.coord.lon}\u00B0 E`
    humidity.innerHTML = `Humdidity:${data.main.humidity} %`
    Pressure.innerHTML = `Pressure:${data.main.pressure}mb`
    DescriptionOfWeather.innerHTML = data.weather[0].description
    maxTemprature.innerHTML = `${data.main.temp_max}\u00B0/`

    minTemprature.innerHTML = `${data.main.temp_min}\u00B0`
    speed.innerHTML = `Speed:${data.wind.speed}km/h`
    degree.innerHTML = `Wind Degree: ${data.wind.deg}\u00B0`
  }

  Fetching()
})
