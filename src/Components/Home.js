import React from 'react';
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h2 className='display-3 text-center'>This will be the home component</h2>
        <Link to="/Page2"><button className='btn btn-success fw-bolder'>Click Me for Page 2</button></Link>
    </div>
  )
}
