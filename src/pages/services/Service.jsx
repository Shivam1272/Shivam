import React from 'react'
import Lottie from 'lottie-react'


function Service({service}) {
    const {serviceName, animation} = service
  return (
   <div className=" h-[400px] card w-96 bg-base-100 shadow-xl hover:border-2 hover:border-red-600 relative">
        <figure className="px-10 pt-10">
            <Lottie className="w-1/2" animationData={animation} loop={true}></Lottie>
        </figure>
        <div className="card-body items-center text-center absolute bottom-0 mb-5">
            <h2 className="card-title">{serviceName}</h2>
        </div>
    </div>
  )
}

export default Service