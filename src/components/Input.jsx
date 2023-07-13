import React from 'react'
import { useDebounce } from '../hooks/useDebounce'

const Input = () => {
  const [inpVal, setInpVal] = React.useState('')

  const debounceValue = useDebounce(inpVal)
  console.log(debounceValue, 'jjj');

  return (
    <div className='container bg-dark d-flex align-items-center p-5 justify-content-center flex-column gap-5'>
      <input type="text" value={inpVal} onChange={e => setInpVal(e.target.value)} className='form-control w-75' placeholder='enter something..' />
      <button type='submit' className='btn btn-primary'>enter</button>
    </div>
  )
}

export default Input