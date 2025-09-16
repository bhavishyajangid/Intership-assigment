import React from 'react'

const Loader = () => {
  return (
     <div className="flex justify-center py-2">
      <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default Loader