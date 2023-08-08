import React from 'react'
import {Link} from 'react-router-dom'

export default function Page2() {
  return (
    <div><h1 className='text-center display-3'>This is Page 2</h1>
    <Link to="/"><button className='btn btn-danger fw-bolder'>Click Me for the Home Page</button> </Link>
    </div>
  )
}
