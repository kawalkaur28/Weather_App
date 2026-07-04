import Input from "./Components/Input"
import Button from "./Components/Button"
import { useState, useEffect } from "react"

const App = () => {
    let apiKey = "043d775049a1d9b3b1f756884e7c404e" 
    let [city, setCity] = useState("")
    let [weather, setWeather] = useState(null)
    let [value, setValue] = useState("")

    useEffect(() => {
        let getWeather = async () => {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            let data = await response.json()
            setWeather(data)
        }
        getWeather()
    }, [city])
    console.log(weather)

    return (
        <>
            <div className="container mx-auto px-4 text-center">
                <h1 className="font-bold text-2xl mb-[5px]">Weather App</h1>
                <Input value={city} onChange={(e) => setValue(e.target.value)} />
                <button className="border w-[100px] bg-[#bcbcbc] cursor-pointer" onClick={() => setCity(value)}>Search</button>
                {/* <Button  onclick={() => setCity(value)}/> */}
                {weather && weather.main && (
                    <div className="mt-4">
                        <p>Weather in {weather.name}</p>
                        <h2>{weather.main.temp}°C</h2>
                        <p>{weather.weather[0].main}</p>
                    </div>
                )}
            </div>
        </>
    )
}
export default App
