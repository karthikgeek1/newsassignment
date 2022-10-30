import React from 'react'
import { Link } from 'react-router-dom'
import Navabar from './Navbar'
const Details = () => {
  const data = JSON.parse(localStorage.getItem('itemDetails'))
  const handleClick=()=>{
    localStorage.removeItem('itemDetails')
  }
  return (
    <div>
      <Navabar/>
      {data?<div>
        <div className='detail-para'>
          <img src={data.urlToImage} style={{ height: "300px", width: "300px" }} />
        </div>
        <h1>{data.title}</h1>
        <div className='detail-para'>
        <p>{data.content}</p>
        </div>
      </div>:<h1>Please select something</h1>}
      <Link to='/'><button className='btn' onClick={()=>handleClick()}>Go Back</button></Link>
    </div>
  )
}

export default Details
