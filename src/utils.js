export const icons = {
    "01": "./sunny.svg",
    "02": "./sun-cloudy.svg",
    "03": "./cloudy.svg",
    "04": "./cloudy.svg",
    "09": "./rain.svg",
    "10": "./rain.svg",
    "11": "./thunder.svg",
    "13": "./cloudy.svg",
    "50": "./cloudy.svg"
}

export function getCardinalDirection(degrees) {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  
    const index = Math.round(degrees / 45);
    return directions[index];
}
  