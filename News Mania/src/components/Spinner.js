import React from 'react'
import Loading from './Loading.gif'

export default function Spinner()  {
    return (
      <div>
        <div className="text-center">
            <img src={Loading} alt="Loading" />
        </div>
      </div>
    )
}