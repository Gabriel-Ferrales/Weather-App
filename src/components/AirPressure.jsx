export default function WindStatus({pressure, units="metric"}){

    return (
        <div className="backdrop-blur-lg w-full h-52 bg-white bg-opacity-30 rounded-xl border border-white border-opacity-30  flex flex-col justify-evenly items-center flex-grow shadow-xl">
            <div className="text-center text-gray-200 text-base text-xl">Air Pressure in {units === "metric" ? "pascal" : "mb"}</div>
            <div>
                <span className="text-gray-200 text-6xl font-bold">{pressure}</span>
         
            </div> 
        </div>
    )
}