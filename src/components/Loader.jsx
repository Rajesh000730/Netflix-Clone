import React from 'react'

function Loader() {
  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
      <div className="bg-blue-red h-1.5 rounded-full dark:bg-red-500"  style={{width:'45%'}}></div>
    </div>
  )
}

export default Loader