import React from 'react'

import { HumidityIcon } from './icons/humidity'
import { PressureIcon } from './icons/pressure'
import { WindIcon } from './icons/wind'
import { WindDirect } from './icons/windDirect'

interface WeatherStatsProps {
  speed?: number
  direction?: number
  humidity?: number
  pressure?: number
}

const getWindDirectionName = (degrees: number): string => {
  if (degrees === undefined) return ''

  const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ']
  const index = Math.round((degrees % 360) / 45) % 8
  return directions[index] || ''
}

export const WeatherStats: React.FC<WeatherStatsProps> = ({
  speed = 0,
  direction = 0,
  humidity = 0,
  pressure = 0
}) => {
  const directionName = React.useMemo(() => getWindDirectionName(direction), [direction])
  const pressureMmHg = Math.round(pressure * 0.75)
  const speedMs = Math.round((speed * 1000) / 3600)

  return (
    <div className='flex flex-wrap gap-x-4 gap-y-2 text-base'>
      {/* Ветер/Wind */}
      <div
        className='flex items-center'
        aria-label={`Ветер: ${speedMs} м/с, ${directionName}`}
      >
        <WindIcon
          className='mr-1 h-5 w-5 opacity-50'
          aria-hidden='true'
        />
        <span>
          {speedMs} м/с, {directionName}
          <span
            className='ml-1 inline-block transition-transform'
            style={{ transform: `rotate(${direction}deg)` }}
            aria-hidden='true'
          >
            <WindDirect className='opacity-50' />
          </span>
        </span>
      </div>

      {/* Влажность/Humidity */}
      <div
        className='flex items-center'
        aria-label={`Влажность: ${humidity}%`}
      >
        <HumidityIcon
          className='mr-1 h-5 w-5 opacity-50'
          aria-hidden='true'
        />
        <span>{humidity}%</span>
      </div>

      {/* Давление/Pressure */}
      <div
        className='flex items-center'
        aria-label={`Давление: ${pressureMmHg} мм рт. ст.`}
      >
        <PressureIcon
          className='mr-1 h-5 w-5 opacity-50'
          aria-hidden='true'
        />
        <span>{pressureMmHg} мм рт.ст.</span>
      </div>
    </div>
  )
}
