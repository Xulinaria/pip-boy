import { useEffect, useState } from 'react'

import { getWeatherData } from '../api/openmeteo'
import type { WeatherResponse } from '../types/weather'

export const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null)

  useEffect(() => {
    getWeatherData().then(setWeatherData)
  }, [])

  return { weatherData }
}
