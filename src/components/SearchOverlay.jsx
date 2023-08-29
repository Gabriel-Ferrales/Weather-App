import '.././SearchOverlay.css';
import  {useState} from "react"
import {Form, useSearchParams} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getCurrentLocation } from "../api";

const SearchOverlay = ({isOpen, onClose}) => {
    const [isClosing, setIsClosing] = useState(false);
    const [city, setCity] = useState("")
    const [loading, setLoading] = useState(false)
    const [geolocated, setGeolocated] = useState(false)

    const handleClose = () => {
        setIsClosing(true);
        // Add a delay to allow the animation to complete before fully closing the overlay
        setTimeout(() => {
        onClose();
        setIsClosing(false);
        }, 750); // Adjust the delay as needed

        // Alternatively, you can use the onAnimationEnd event:
        // In this case, make sure to update the CSS animation accordingly
        // See CSS code in step 2 below for the updated fade-out animation
    };

    async function getGeolocation(){
        setLoading(true)
        const data = await getCurrentLocation()
        setCity(data.name)
        setLoading(false)
        if (data.name){
            setGeolocated(true)
        }
        return 
    }
  
    
    return (
        <div className={`search-overlay bg-sky-700 px-8 py-8 flex flex-col justify-start items-end  ${isClosing ? 'close' : ''}`} >
            <button className="bg-white rounded-full w-10 h-10 custom-shadow" onClick={handleClose}>
                <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </button>

            {<button onClick={getGeolocation} className="px-2 gap-1 h-10 bg-white rounded-full shadow shadow-inner flex items-center justify-center custom-shadow my-4 place-self-start">
                     {
                        !loading ?
                        <>
                            <p>Get location</p>
                            <FontAwesomeIcon icon="fa-solid fa-location-crosshairs"  />
                        </>
                        : 
                            <p>Is loading...</p>
                    }
            </button>}

            <p className="place-self-start mt-4 mb-2 text text-gray-200 text-xl">{!geolocated ? "Or type it yourself :" : "Location was found!"}</p>

            <Form className="flex flex-col w-full " onSubmit={() => {
                handleClose()
            }}>
                <input 
                    className="w-full p-3 mt-4 bg-transparent border border-gray-200 text-white text-base font-medium " 
                    type="text" 
                    name="city" 
                    placeholder="search location" 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                   <div>
                        <p className="mt-4 mb-2 text text-gray-200 text-xl">Units</p>
                        <input 
                            type="radio" 
                            name="units" 
                            value={"metric"} 
                            id="metric"  
                            className="hidden"
    
                        />  
                        <label htmlFor="metric"  className="bg-white rounded-full py-1 px-2 custom-shadow cursor-pointer">Metric</label>

                        <input 
                            type="radio" 
                            name="units" 
                            value={"imperial"} 
                            id="imperial" 
                            className="hidden"
                           
                        />
                        <label htmlFor="imperial" className="bg-white rounded-full py-1 px-2 ml-2 custom-shadow cursor-pointer">Imperial</label>              
                   </div>
                <button className="w-full p-3 mt-4 bg-white rounded-xl custom-shadow">Search</button>
            </Form>
        </div>
    );
};

export default SearchOverlay;
