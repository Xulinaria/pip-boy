export const formatTemperature = (temp: number): string => {
  const round = Math.round(temp)
  return `${round > 0 ? '+' : ''}${round}°`
}
