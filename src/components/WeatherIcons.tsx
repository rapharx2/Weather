type Props = {
  src: string
}

export default function WeatherIcons({ src }: Props) {
  return (
    <img
      className="size-8"
      src={`https://openweathermap.org/img/wn/${src}.png`}
      alt="Weather Icon"
    />
  )
}
