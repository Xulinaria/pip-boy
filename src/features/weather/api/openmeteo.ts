import { fetchWeatherApi } from 'openmeteo'

const params = {
  latitude: 51.4839,
  longitude: 46.1053,
  hourly: [
    'temperature_2m',
    'precipitation',
    'relative_humidity_2m',
    'precipitation_probability',
    'apparent_temperature',
    'weather_code',
    'wind_speed_10m',
    'wind_direction_10m',
    'pressure_msl'
  ],
  timezone: 'auto',
  past_days: 1,
  forecast_days: 2
}
const url = 'https://api.open-meteo.com/v1/forecast'

// Helper function to form time ranges
const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step)

export const getWeatherData = async () => {
  const responses = await fetchWeatherApi(url, params)
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
      precipitation: hourly.variables(1)!.valuesArray()!,
      relativeHumidity2m: hourly.variables(2)!.valuesArray()!,
      precipitationProbability: hourly.variables(3)!.valuesArray()!,
      apparentTemperature: hourly.variables(4)!.valuesArray()!,
      weatherCode: hourly.variables(5)!.valuesArray()!,
      windSpeed10m: hourly.variables(6)!.valuesArray()!,
      windDirection10m: hourly.variables(7)!.valuesArray()!,
      pressureMsl: hourly.variables(8)?.valuesArray()!
    }
  }
}
