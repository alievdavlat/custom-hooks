import React from 'react'
import { useInputValues } from '../hooks/useInputValues'
import useAxios from '../hooks/useAxios'

const obj = {
  username:'',
  age:'',
  email:'',
  job:'',

}

const Form = () => {
  const [postData , setPostData ] = React.useState({})
  const { values , change } = useInputValues(obj)
  const { data , loading , error }  = useAxios(postData)

  const submitHandler = (e) => {
      e.preventDefault()
      setPostData({method:'POST', url:"/users", body:values})
      console.log(values);
  } 

  return (
    <form onSubmit={submitHandler} className='container  mt-5 p-5 rounded-5 d-flex align-items-center justify-content-center bg-dark flex-column gap-3'>
          <div className='w-100 d-flex align-items-center justify-content-center'>
              <h1 className='text-white'>form</h1>
          </div>
        <div className='w-25'>
          <label className='form-label-input text-white mb-2' htmlFor="name">Name:</label>
          <input type="text" value={values.username} onChange={change} id='name' name='username' placeholder='name...' className='form-control' />
        </div>
        <div className='w-25'>
          <label className='form-label-input text-white mb-2' htmlFor="email">Email:</label>
          <input type="text" value={values.email} onChange={change} id='email' name='email' placeholder='email...' className='form-control' />
        </div>
        <div className='w-25'>
          <label className='form-label-input text-white mb-2' htmlFor="age">Age:</label>
          <input type="text" value={values.age} onChange={change} id='age' name='age' placeholder='age...' className='form-control' />
        </div>
        <div className='w-25'>
          <label className='form-label-input text-white mb-2' htmlFor="job">Job:</label>
          <input type="text" value={values.job} onChange={change} id='job' name='job' placeholder='job...' className='form-control' />
        </div>
        

        <div className='w-100 d-flex align-items-center justify-content-center'>
            <button className='btn btn-success mt-5 px-3'>submit</button>
        </div>
    </form>
  )
}

export default Form