export type WeatherCode =
  | 0
  | 1
  | 2
  | 3
  | 45
  | 48
  | 51
  | 53
  | 55
  | 56
  | 57
  | 61
  | 63
  | 65
  | 66
  | 67
  | 71
  | 73
  | 75
  | 77
  | 80
  | 81
  | 82
  | 85
  | 86
  | 95
  | 96
  | 99

export const WEATHER_CODE_DESCRIPTIONS: Record<number, string> = {
  0: 'Ясно',
  1: 'Преимущественно ясно',
  2: 'Переменная облачность',
  3: 'Пасмурно',
  45: 'Туман',
  48: 'Туман с инеем',
  51: 'Легкая морось',
  53: 'Умеренная морось',
  55: 'Сильная морось',
  56: 'Ледяная морось',
  57: 'Сильная ледяная морось',
  61: 'Небольшой дождь',
  63: 'Умеренный дождь',
  65: 'Сильный дождь',
  66: 'Ледяной дождь',
  67: 'Сильный ледяной дождь',
  71: 'Небольшой снег',
  73: 'Умеренный снег',
  75: 'Сильный снег',
  77: 'Снежные зерна',
  80: 'Небольшие ливни',
  81: 'Умеренные ливни',
  82: 'Сильные ливни',
  85: 'Небольшие снежные ливни',
  86: 'Сильные снежные ливни',
  95: 'Гроза',
  96: 'Гроза со слабым градом',
  99: 'Гроза с сильным градом'
} as const

export interface WeatherResponse {
  hourly: WeatherHourly
}

export interface WeatherHourly {
  time: Date[]
  temperature2m: Float32Array | number[]
  precipitation: Float32Array | number[]
  relativeHumidity2m: Float32Array | number[]
  precipitationProbability: Float32Array | number[]
  apparentTemperature: Float32Array | number[]
  weatherCode: Float32Array | number[]
  windSpeed10m: Float32Array | number[]
  windDirection10m: Float32Array | number[]
  pressureMsl: Float32Array | number[]
}
