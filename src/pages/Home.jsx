import Weather from "../components/Weather"
import { getCurrentWeather, getWeatherData, getCityCoordinates } from "../api"
import { useLoaderData, Outlet} from "react-router-dom"

export async function loader({request}){
    const url = new URL(request.url)
    const city = url.searchParams.get("city") || localStorage.getItem("city") || "hermosillo"
    const units = url.searchParams.get("units") || "metric"
    const coordinates = await getCityCoordinates(city)
    const lat = coordinates[0].lat
    const lon = coordinates[0].lon
    const weatherData = await getCurrentWeather({lat, lon, units})
    const forecastData = await getWeatherData({lat, lon, units})

    localStorage.setItem("city", city)

    return {weatherData, coordinates, forecastData, units}
}

export default function Home() {
    
    let {weatherData, coordinates, forecastData, units} = useLoaderData()
  
    return (
      <>
      <div className="flex flex-col sm:flex-row min-h-screen">
        <Weather weatherData={weatherData} units={units}/>
        <Outlet context={{weatherData, coordinates, forecastData, units}}/>
      </div>
      </>
    )
  }