import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getCardinalDirection } from "../utils"

export default function WindStatus({speed, units="metric", direction}){

    const cardinalDirection = getCardinalDirection(direction)

    return (
        <div className="backdrop-blur-lg w-full h-52 bg-white bg-opacity-30 rounded-xl border border-white border-opacity-30  flex flex-col justify-evenly items-center flex-grow shadow-xl">
            <div className="text-center text-gray-200 text-base text-xl">Wind status</div>
            <div className="">
                <span className="text-gray-200 text-6xl font-bold ">{speed}</span>
                <span className="text-gray-200 text-3xl">{units === "metric" ? "kmh" : "mph"}</span>
            </div>
            <div className="flex items-center justify-between gap-3 px-1">
                <div style={{ transform: `rotate(${direction}deg)` }} >
                    <FontAwesomeIcon className="rotate-[315deg]" icon="fa-solid fa-location-arrow" size="xl" style={{color: "#ffffff"}} />
                </div>
                <p className="text-gray-200 text-3xl">{cardinalDirection}</p>
            </div> 
        </div>
    )
}