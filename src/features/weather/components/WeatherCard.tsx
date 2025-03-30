import { useEffect, useState } from 'react'

import bgWeather from '@assets/images/bg-weather.jpg'

import { useWeatherData } from '../hook/useWeatherData'
import { isWeatherCode } from '../types/weather'
import { WeatherStats } from '../ui/WeatherStats'
import { WeatherTemperature } from '../ui/WeatherTemperature'

const WeatherCard = () => {
  const { weatherData } = useWeatherData()
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  if (!weatherData) {
    return (
      <div className='mt-20 flex items-center justify-center'>
        <div className='p-4 text-center'>Загрузка погодных данных...</div>
      </div>
    )
  }

  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const hourlyData = weatherData.hourly

  // Безопасное получение индекса
  const getSafeIndex = (hourOffset: number) => {
    const totalHours = hourlyData.time.length
    return (hours + hourOffset) % totalHours
  }

  const currentIndex = getSafeIndex(24)
  const yesterdayIndex = getSafeIndex(0)

  // Безопасное получение данных
  const currentTemp = hourlyData.temperature2m[currentIndex] ?? 0
  const yesterdayTemp = hourlyData.temperature2m[yesterdayIndex]?.toFixed() ?? 'N/A'
  const weatherCode = hourlyData.weatherCode[currentIndex]
  const validWeatherCode = weatherCode !== undefined && isWeatherCode(weatherCode)

  return (
    <div className='mt-20 flex items-center justify-center'>
      <div
        className='h-[300px] w-[600px] rounded-2xl p-4 text-white shadow-lg'
        style={{
          backgroundImage: `url(${bgWeather})`,
          backgroundSize: 'cover'
        }}
      >
        <div className='text-lg font-bold'>
          Сейчас {hours}:{minutes < 10 ? `0${minutes}` : minutes}
        </div>
        <div className='text-md'>Вчера в это время было {yesterdayTemp}°</div>

        <WeatherTemperature
          temperature={currentTemp}
          apparentTemperature={hourlyData.apparentTemperature[currentIndex]}
          weatherCode={validWeatherCode ? weatherCode : 0}
        />

        <WeatherStats
          speed={hourlyData.windSpeed10m[currentIndex] ?? 0}
          direction={hourlyData.windDirection10m[currentIndex] ?? 0}
          humidity={hourlyData.relativeHumidity2m[currentIndex] ?? 0}
          pressure={hourlyData.pressureMsl[currentIndex] ?? 0}
        />
      </div>
    </div>
  )
}

export default WeatherCard
