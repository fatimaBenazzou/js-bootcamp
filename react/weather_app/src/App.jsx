import { useEffect, useState } from "react";
const details = [
    {
        icon: "icon-[wi--humidity]",
        value: (weatherData) => `${weatherData.main.humidity}%`,
    },
    {
        icon: "icon-[wi--strong-wind]",
        value: (weatherData) => `${weatherData.wind.speed} m/s`,
    },
    {
        icon: "icon-[wi--barometer]",
        value: (weatherData) => `${weatherData.main.pressure} hPa`,
    },
    {
        icon: "icon-[wi--cloudy]",
        value: (weatherData) => `${weatherData.clouds.all}%`,
    },
];
const getBackgroundColor = (weather) => {
    switch (weather) {
        case "Clear":
            return "from-orange-300 to-yellow-300";
        case "Clouds":
            return "from-gray-300 to-blue-300";
        case "Rain":
            return "from-blue-300 to-indigo-500";
        case "Snow":
            return "from-white to-blue-200";
        case "Thunderstorm":
            return "from-gray-700 to-black";
        default:
            return "from-gray-300 to-blue-300";
    }
};

const getWeatherIcon = (weather) => {
    switch (weather) {
        case "Clear":
            return "icon-[wi--day-sunny]";
        case "Clouds":
            return "icon-[wi--cloudy]";
        case "Rain":
            return "icon-[wi--rain]";
        case "Snow":
            return "icon-[wi--snow]";
        case "Thunderstorm":
            return "icon-[wi--thunderstorm]";
        case "Drizzle":
            return "icon-[wi--showers]";
        case "Mist":
            return "icon-[mdi--weather-mist]";
        case "Smoke":
            return "icon-[mdi--smoke]";
        case "Haze":
            return "icon-[mdi--weather-hazy]";
        case "Dust":
            return "icon-[mdi--weather-dust]";
        case "Fog":
            return "icon-[mdi--weather-fog]";
        case "Tornado":
            return "icon-[mdi-weather-tornado]";
        default:
            return "icon-[wi--day-sunny]";
    }
};
function App() {
    const [city, setCity] = useState("Alger");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchWeather = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
                    import.meta.env.VITE_API_KEY
                }&units=metric`
            );
            const data = await response.json();
            if (data.cod === 200) {
                setWeatherData(data);
            } else {
                setError("City not found");
            }
        } catch (error) {
            setError("Error fetching weather data");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    console.log(weatherData);

    return (
        <main className="bg-gray-100 p-4 min-h-screen flex items-center justify-center">
            {/* content */}
            <section className="w-full max-w-md">
                {/* search bar */}
                <form onSubmit={handleSearch} className="flex gap-4 items-center mb-4">
                    {/* input */}
                    <input
                        type="text"
                        placeholder="Enter a city..."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="input bg-white text-black rounded-full flex-1"
                    />
                    {/* button */}
                    <button
                        disabled={isLoading}
                        className="btn btn-circle bg-white border-0 text-black"
                    >
                        {isLoading ? (
                            <span className="loading loading-spinner"></span>
                        ) : (
                            <span className="icon-[bi--search] w-5 h-5"></span>
                        )}
                    </button>
                </form>
                {error && <p className="text-red-500 text-center">{error}</p>}
                {/* card */}
                {weatherData && !error && (
                    <div
                        className={`card bg-gradient-to-b ${getBackgroundColor(
                            weatherData.weather[0].main
                        )} p-6 rounded-xl shadow-xl text-white`}
                    >
                        <div className="flex flex-col items-center gap-4">
                            <span
                                className={`w-16 h-16 ${getWeatherIcon(
                                    weatherData.weather[0].main
                                )}`}
                            ></span>
                            <h2 className="text-2xl font-bold">
                                {weatherData.name}, {weatherData.sys.country}
                            </h2>
                            <p>{weatherData.weather[0].description}</p>
                            <p className="text-6xl font-bold">
                                {Math.round(weatherData.main.temp)}°C
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {details.map((detail, i) => (
                                <div key={detail.icon + i} className="flex items-center gap-2">
                                    <span className={`${detail.icon} w-6 h-6`}></span>
                                    <p>{detail.value(weatherData)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}

export default App;
