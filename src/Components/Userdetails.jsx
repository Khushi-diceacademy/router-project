import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Userdetails() {
    const {name} = useParams()
    const navigate = useNavigate()
   
  return (
    <div>
        <h2 className='text-2xl'> hello 🙋‍♂️ this side {name}</h2>
        <button onClick={()=>navigate(-1)} className='px-5 py-2 bg-sky-600 text-white'>Go back</button>
    </div>
  )
}

export default Userdetails