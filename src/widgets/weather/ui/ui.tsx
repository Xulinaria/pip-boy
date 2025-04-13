import { WeatherBackground, WeatherStats } from '@entities/weather'

import { useWeatherData } from '../lib/hook/useWeatherData'

export const WeatherWidgets = () => {
  const hourlyData = useWeatherData()
  const hours = new Date().getHours()

  const yesterdayIndex = hours
  const currentIndex = hours + 24

  return (
    <WeatherBackground className='rounded-2xl p-2'>
      {!hourlyData ? (
        <div>загрузка</div> //TODO: переделать
      ) : (
        <WeatherStats
          yesterdayTemperature={hourlyData.temperature2m[yesterdayIndex]}
          currentTemperature={hourlyData.temperature2m[currentIndex]}
          apparentTemperature={hourlyData.apparentTemperature[currentIndex]}
          weatherCode={hourlyData.weatherCode[currentIndex]}
          windSpeed={hourlyData.windSpeed10m[currentIndex]}
          direction={hourlyData.windDirection10m[currentIndex]}
          humidity={hourlyData.relativeHumidity2m[currentIndex]}
          pressure={hourlyData.pressureMsl[currentIndex]}
        />
      )}
    </WeatherBackground>
  )
}
