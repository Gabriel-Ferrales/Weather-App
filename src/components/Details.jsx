import Daily from "./Daily"
import Highlight from "./WindStatus"
import AirPressure from "./AirPressure"
import Humidity from "./Humidity"
import Visibility from "./Visibility"
import WindStatus from "./WindStatus"
import { getWeatherData } from "../api"
import { useLoaderData, useOutletContext } from "react-router-dom"


export default function Details(){
    
    const {weatherData, forecastData, units} = useOutletContext()
    const data = forecastData.list


    // First we iterate trough the data
    const dailyElements = data.map(item => {
        // We check if the day corresponds to 12:00 PM (5pm in my location)
        const targetDate = new Date(item.dt * 1000)
        const hour = targetDate.getHours()
        const options = {
            weekday: 'short',  // Short weekday name (e.g., "Thu")
            day: '2-digit',    // Two-digit day of the month (e.g., "24")
            month: 'short',    // Short month name (e.g., "Aug")
        };

        const dateFormatter = new Intl.DateTimeFormat('en-US', options);
        const formattedDate = dateFormatter.format(targetDate)
        
        if (hour === 5){
            return (<Daily
                key={item.dt}
                day={formattedDate} 
                units={units}
                min={item.main.temp_min}
                max={item.main.temp_max}
                icon={(item.weather[0].icon).slice(0, 2)}
            />)
        }
    })


    return (
    <div className="bg-gradient-to-b from-[#47BFDF] via-[#4A91FF] to-[#47BFDF] py-8 sm:w-2/3 flex flex-col items-center justify-evenly">

        <div className="px-8 flex flex-col items-center">
            
            <h1 className="text-gray-200 text-2xl font-bold self-start	mt-12 mb-4">Next Forecast</h1>

            <div className="flex flex-row text-center flex-wrap lg:flex-nowrap gap-5 justify-center ">
               {dailyElements}
            </div>

            <h1 className="text-gray-200 text-2xl font-bold self-start	mt-12 mb-4">Today’s Hightlights </h1>
    
            <div className=" grid grid-cols-1 sm:grid-cols-2 text-white place-items-center gap-5 w-full">
                <WindStatus speed={weatherData.wind.speed} direction={weatherData.wind.deg} units={units}/>
                <Humidity percentage={weatherData.main.humidity}/>
                <Visibility visibility={weatherData.visibility} units={units}/>
                <AirPressure pressure={weatherData.main.pressure}/> 
            </div>
        </div>
        
       
    </div>)
}

