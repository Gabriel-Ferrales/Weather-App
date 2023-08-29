import SunnySvg from "./SunnySvg"
import {icons} from "../utils"

export default function Daily({day, max, min, units="metric", icon}){
    
    const unitOfMeasure = units === "metric" ? "C" : "F" 
    
    
    return (
        <div className="py-2 px-1 min-w-[47%] sm:min-w-0 sm:w-1/5 sm:py-4 bg-white bg-opacity-30 rounded-xl border border-white border-opacity-30 flex flex-col xl:grow text-white shadow-xl backdrop-blur-lg items-center justify-between">
            <p className="text-s">{day}</p>
            <img src={icons[icon]}  className=""/>
            <div className="flex justify-between gap-2">
                {/* <p className="text-xs">{`${min}°${unitOfMeasure}`}</p> */}
                <p className="text-s">{`${max}°${unitOfMeasure}`}</p>
            </div>
        </div>
    )
}

