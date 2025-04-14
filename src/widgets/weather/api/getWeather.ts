import { fetchWeatherApi } from 'openmeteo'

const params = {
  latitude: 51.48,
  longitude: 46.1,
  timezone: 'auto',
  hourly: [
    'temperature_2m',
    'wind_speed_10m',
    'wind_direction_10m',
    'weather_code',
    'relative_humidity_2m',
    'precipitation_probability',
    'precipitation',
    'apparent_temperature',
    'pressure_msl'
  ],

  past_days: 1,
  forecast_days: 2
}
const URL_API = 'https://api.open-meteo.com/v1/forecast'

// Helper function to form time ranges
const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step)

export const getWeather = async () => {
  // Process first location. Add a for-loop for multiple locations or weather models
  const responses = await fetchWeatherApi(URL_API, params)
  const response = responses[0]
  const utcOffsetSeconds = response.utcOffsetSeconds()
  const hourly = response.hourly()!

  // Note: The order of weather variables in the URL query and the indices below need to match!
  return {
    hourly: {
      time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
        t => new Date((t + utcOffsetSeconds) * 1000)
      ),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      windSpeed10m: hourly.variables(1)!.valuesArray()!,
      windDirection10m: hourly.variables(2)!.valuesArray()!,
      weatherCode: hourly.variables(3)!.valuesArray()!,
      relativeHumidity2m: hourly.variables(4)!.valuesArray()!,
      precipitationProbability: hourly.variables(5)!.valuesArray()!,
      precipitation: hourly.variables(6)!.valuesArray()!,
      apparentTemperature: hourly.variables(7)!.valuesArray()!,
      pressureMsl: hourly.variables(8)!.valuesArray()!
    }
  }
}
