import bgWeather from '@entities/weather/assets/background/bg-weather.jpg'

interface WeatherBackgroundProps {
  children: React.ReactNode
  className?: string
}

export const WeatherBackground = ({ children, className = '' }: WeatherBackgroundProps) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${bgWeather})`,
        backgroundSize: 'cover'
      }}
    >
      {children}
    </div>
  )
}
