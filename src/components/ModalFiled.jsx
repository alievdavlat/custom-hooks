import React from 'react'
import Modal from './Modal'
import { useModal } from '../hooks/useModal';

const ModalFiled = () => {
  const { isOpen, open, close, toggle } = useModal()
  return (
    <>
    <div className='d-flex align-items-center justify-content-center container'>
      {
        isOpen ?   <Modal/> : <h1 className='text-white'>modal yopiq</h1>
      }
    </div>
    
      <button onClick={open} className='btn btn-info mr-2'>
        open Modal 1
      </button>
      <button onClick={close} className='btn btn-info mr-2'>
        close Modal 1
      </button>
      <button onClick={toggle} className='btn btn-info mr-2'>
        toggle Modal 1
      </button>


    </>
  )
}

export default ModalFiled