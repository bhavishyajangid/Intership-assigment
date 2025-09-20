import { memo } from 'react'
import { CurrentWeather, Forcast } from '../../import'


const Weather = () => {
  return (
      <div>
        <CurrentWeather/>
        <Forcast/>
      </div>
  )
}

export default memo(Weather) 