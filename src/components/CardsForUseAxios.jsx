import React from 'react'
import useAxios from '../hooks/useAxios'


const CardsForUseAxios = () => {
  const { loading , error, data } = useAxios({method:'GET', url:'/users'})
  return (
    <div className='d-flex align-items-center justify-content-center flex-wrap gap-5'>

     {
      data.map(item => {
        return (
          <div className='d-flex align-items-center justify-content-center flex-column border p-4'>
          <h1 className='text-white'>{item.name}</h1>
          <p className='text-white'>{item.email}</p>
        </div>
        )
      })
     }

    </div>
  )
}

export default CardsForUseAxios