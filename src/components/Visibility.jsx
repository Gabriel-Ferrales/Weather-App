export default function WindStatus({visibility, units="metric"}){


    if (units === "imperial") {
        visibility = Math.round(visibility * 0.621371)
    }

    return (
        <div className="w-full h-52 bg-white bg-opacity-30 rounded-xl border border-white border-opacity-30  flex flex-col justify-evenly items-center flex-grow shadow-xl">
            <div className="text-center text-gray-200 text-base text-xl">Visibility in {units === "metric" ? "kilometers" : "miles"}</div>
            <div className="">
                <span className="text-gray-200 text-6xl font-bold">{visibility.toLocaleString()}</span>
            </div> 
        </div>
    )
}