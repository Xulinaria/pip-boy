import {
  ClearDayIcon,
  CloudIcon,
  DrizzleIcon,
  FogDayIcon,
  FreezingRainIcon,
  PartlyCloudDayIcon,
  RainIcon,
  ThunderstormIcon
} from '@entities/weather/assets/icons'

export const codeToIcon = (weatherCode: number) => {
  const ICON_SIZE = 'h-[48px] w-[48px]'

  //TODO: TIME

  switch (true) {
    //clear
    case weatherCode === 0:
      return <ClearDayIcon className={ICON_SIZE} />

    //cloud
    case weatherCode >= 1 && weatherCode <= 2:
      return <PartlyCloudDayIcon className={ICON_SIZE} />
    case weatherCode === 3:
      return <CloudIcon className={ICON_SIZE} />

    //fog
    case weatherCode >= 45 && weatherCode <= 48:
      return <FogDayIcon className={ICON_SIZE} />

    //rain
    case weatherCode >= 51 && weatherCode <= 57:
      return <DrizzleIcon className={ICON_SIZE} />
    case weatherCode >= 61 && weatherCode <= 65:
      return <RainIcon className={ICON_SIZE} />
    case weatherCode >= 66 && weatherCode <= 67:
      return <FreezingRainIcon className={ICON_SIZE} />
    case weatherCode >= 80 && weatherCode <= 82:
      return <RainIcon className={ICON_SIZE} />

    //snow
    case weatherCode >= 95 && weatherCode <= 99:
      return <ThunderstormIcon className={ICON_SIZE} />

    default:
      return <div className=''></div>
  }
}
