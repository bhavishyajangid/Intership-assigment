export const calculateTimeDiffrence = (storedData , val) => {
 const ResetMinute = 10
      const now = Date.now()
    const cityData = storedData[val.toLowerCase()]

    
    if(cityData){
        const timeInMinute = Math.abs(now - cityData.timestamp) / (1000 * 60)

        if(timeInMinute < ResetMinute){
            return 'fresh'
        }else{
            return 'delete'
        }
    }


    
}