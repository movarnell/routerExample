import React from 'react';
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <p>This will be the home component</p>
        <Link to="/Page2">Page 2 Here</Link>
    </div>
  )
}
