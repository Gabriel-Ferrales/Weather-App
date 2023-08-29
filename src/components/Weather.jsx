import { useState, createContext } from "react"
import SearchOverlay from "../components/SearchOverlay"
import {icons} from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Weather({weatherData, units}){
    // Grab props data 
    // We define a state and functions to animate the search navigation item
    const [searchOpen, setSearchOpen] = useState(false)

    const handleSearchOpen = () => {
        setSearchOpen(true)
      }
    
    const handleSearchClose = () => {
        setSearchOpen(false)
    }

    // Grabbing and formatting the current date
    const today =  new Date
    const options = {
        weekday: 'short',  // Short weekday name (e.g., "Thu")
        day: '2-digit',    // Two-digit day of the month (e.g., "24")
        month: 'short',    // Short month name (e.g., "Aug")
    };
    const dateFormatter = new Intl.DateTimeFormat('en-US', options);
    const formattedDate = dateFormatter.format(today)

    return (
        <div className="bg-gradient-to-b from-[#2B7B98] via-[#33609E] to-[#2B7B98] sm:w-1/3 py-8 flex flex-col items-center justify-start gap-5 relative">

            {searchOpen && <SearchOverlay onClose={handleSearchClose} isOpen={searchOpen}/>}

            {/* buttons */}
            <div className="flex flex-row justify-start  gap-5 w-full px-6 justify-between">
                <button className="w-40 h-10 bg-white rounded-xl shadow shadow-inner custom-shadow" onClick={handleSearchOpen}>Search for places</button>
            </div>

            <img src={icons[(weatherData.weather[0].icon).slice(0,2)]} className="w-10/12" />

            <h1><span className="text-gray-200 text-8xl ">{(weatherData.main.temp).toFixed(1)}</span><span className="text-gray-400 text-5xl ">°{units === "metric" ? "C" : "F"}</span></h1>

            <p className="text-center text-gray-400 text-4xl font-semibold capitalize">{weatherData.weather.description}</p>

            <div className="flex gap-3">
                <p className="text-zinc-400 text-lg ">Today</p>
                <p className="text-zinc-400 text-lg ">•</p>
                <p className="text-zinc-400 text-lg ">{formattedDate}</p>
            </div>

            <p className="text-zinc-400 text-lg ">{weatherData.name}</p>

        </div>
    )
}