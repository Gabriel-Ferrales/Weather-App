const apiKey = import.meta.env.VITE_REACT_APP_API_KEY

export async function getWeatherData({lat, lon, units="metric"}){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}
    `)
    const data = await response.json()
    if (!response.ok){
        throw {
            message: "Failed to fetch weather forecast",
            statusText: response.statusText,
            status: response.status
        } 
    }
    return data
}

export async function getCurrentWeather({lat, lon, units="metric"}){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}
    `)
    const data = await response.json()
    if (!response.ok){
        throw {
            message: "Failed to fetch current weather",
            statusText: response.statusText,
            status: response.status
        } 
    }
    return data
}

export async function getCityCoordinates(city = "hermosillo"){
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
    const data = await response.json()
    if (!response.ok){
        throw {
            message: "Failed to get input city coordinates",
            statusText: response.statusText,
            status: response.status
        } 
    }
    return data
}

// export async function getCurrentLocation(){
//     navigator.geolocation.getCurrentPosition(
//         async (position) => {
//            const response = fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
//            const data = await response.json()
//            if (!response.ok){
//                throw {
//                    message: "Failed to get geolocation",
//                    statusText: response.statusText,
//                    status: response.status
//                } 
//            }
//            return data
//        }
//     )
// }

export async function getCurrentLocation() {
    return new Promise(async (resolve, reject) => {
        try {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const response = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`);
                    const data = await response.json();
                    if (!response.ok) {
                        reject({
                            message: "Failed to get geolocation",
                            statusText: response.statusText,
                            status: response.status
                        });
                    } else {
                        resolve(data);
                    }
                },
                (error) => {
                    reject(error);
                }
            );
        } catch (error) {
            reject(error);
        }
    });
}
