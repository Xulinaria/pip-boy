import { WEATHER_CODE_DESCRIPTIONS } from '@entities/weather/consts/weather-code'

export const codeToName = (weatherCode: number) => {
  return WEATHER_CODE_DESCRIPTIONS[weatherCode] ?? 'Неизвестная погода'
}
