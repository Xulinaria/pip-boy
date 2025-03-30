import React from 'react'

import { WEATHER_CODE_DESCRIPTIONS, WeatherCode } from '../types/weather'

interface WeatherTemperatureProps {
  temperature?: number
  apparentTemperature?: number
  weatherCode?: WeatherCode
}

const DEFAULT_WEATHER_CODE = 0 as WeatherCode

const formatTemperature = (temp: number): string => {
  const round = Math.round(temp)
  return `${round > 0 ? '+' : ''}${round}°`
}

export const WeatherTemperature: React.FC<WeatherTemperatureProps> = ({
  temperature = 0,
  apparentTemperature = 0,
  weatherCode = DEFAULT_WEATHER_CODE
}) => {
  const weatherDescription = WEATHER_CODE_DESCRIPTIONS[weatherCode] ?? 'Неизвестная погода'

  return (
    <div className='flex items-center'>
      <div>
        <span className='text-4xl font-medium'>{formatTemperature(temperature)}</span>
      </div>
      <div className='ml-4 flex flex-col'>
        <div className=''>
          <span>{weatherDescription}</span>
        </div>
        <div>
          <span className='opacity-70'>Ощущается как</span>{' '}
          <span>{formatTemperature(apparentTemperature)}</span>
        </div>
      </div>
    </div>
  )
}
