import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFOund() {
  return (
    <div>
        <div className=" py-auto w-full">

        <h1 className='text-2xl text-center fonr-bold  text-red-600 m-auto '>

      Ooopsss.. Page not found Please go back <Link to="/">Home</Link>
        </h1>
        </div>
    </div>
  )
}
