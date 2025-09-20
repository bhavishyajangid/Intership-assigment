import { useSelector } from 'react-redux';
import { ForcastCard } from '../../import';

const Forcast = () => {

    const {forecast} = useSelector(state => state.weatherSlice)

   
    
    
  return (
    
    <div className="  p-3 mt-5 rounded-2xl">
      <h1 className="text-3xl font-bold text-center  mb-8">
        🌤 Weather Forecast
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {forecast?.map((item, index) => (
          <ForcastCard key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Forcast