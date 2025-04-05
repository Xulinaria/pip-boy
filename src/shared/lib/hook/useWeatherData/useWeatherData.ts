import { useEffect, useState } from 'react'

import { getWeather } from '@api/weather'

import type { WeatherResponse } from '@shared/types/weather'

export const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null)

  useEffect(() => {
    getWeather().then(setWeatherData)
  }, [])

  return { weatherData }
}
