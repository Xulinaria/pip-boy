import { formatTemperature } from '@entities/weather/lib/format/temperature'

import { HumidityIcon, PressureIcon, WindDirectIcon, WindIcon } from '../../assets/icons'
import { formatPressure } from '../../lib/format/pressure'
import { formatWindSpeed } from '../../lib/format/wind-speed'
import { codeToIcon } from '../../lib/transform/code-to-icon'
import { codeToName } from '../../lib/transform/code-to-name'
import { windDirectionToName } from '../../lib/transform/wind-direction-to-name'

interface WeatherStatsProp {
  yesterdayTemperature?: number
  currentTemperature?: number
  apparentTemperature?: number
  weatherCode?: number
  windSpeed?: number
  direction?: number
  humidity?: number
  pressure?: number
}

export const WeatherStats = ({
  yesterdayTemperature = 0,
  currentTemperature = 0,
  apparentTemperature = 0,
  weatherCode = 0,
  windSpeed = 0,
  direction = 0,
  humidity = 0,
  pressure = 0
}: WeatherStatsProp) => {
  return (
    <div className=''>
      <div className=''>
        <span className='opacity-70'>{/* //TODO: Сейчас 2:30pm.*/}Вчера в это время было </span>
        <span>{formatTemperature(yesterdayTemperature)}</span>
      </div>

      <div className='mt-4 flex items-center'>
        <div className=''>
          <span className='text-6xl'>{formatTemperature(currentTemperature)}</span>
        </div>
        <div className=''>{codeToIcon(weatherCode)}</div>
        <div className='ml-4'>
          <span>{codeToName(weatherCode)}</span>
          <div className=''>
            <span className='opacity-70'>Ощущается как </span>
            <span>{formatTemperature(apparentTemperature)}</span>
          </div>
        </div>
      </div>

      <div className='mt-1 flex gap-x-4'>
        <div className='flex items-center'>
          <WindIcon className='h-5 w-5 opacity-50' />
          <span className='ml-1'>
            {formatWindSpeed(windSpeed)} м/с, {windDirectionToName(direction)}
            <span
              className='ml-1 inline-block'
              style={{ transform: `rotate(${direction + 180}deg)` }}
            >
              <WindDirectIcon className='h-3 w-3 opacity-50' />
            </span>
          </span>
        </div>
        <div className='flex items-center'>
          <HumidityIcon className='h-5 w-5 opacity-50' />
          <span className='ml-1'>{humidity}%</span>
        </div>
        <div className='flex items-center'>
          <PressureIcon className='h-5 w-5 opacity-50' />
          <span className='ml-1'>{formatPressure(pressure)} мм рт.ст.</span>
        </div>
      </div>
    </div>
  )
}
