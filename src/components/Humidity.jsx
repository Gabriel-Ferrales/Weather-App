export default function Humidity({percentage}){

    return (
        <div className="backdrop-blur-lg w-full h-52 bg-white bg-opacity-30 rounded-xl border border-white border-opacity-30  flex flex-col justify-evenly items-center flex-grow shadow-xl">
            <div className="text-center text-gray-200 text-base text-xl">Humidity</div>
            <div>
                <span className="text-gray-200 text-6xl font-bold">{percentage}%</span>
            </div>
            <div className="w-10/12 rounded-full bg-transparent border">
                <div className={`py-2 rounded-full bg-amber-400`} style={{ width: `${percentage}%` }}>
                </div>
            </div>
        </div>
    )
}