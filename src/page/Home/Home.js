import React from 'react'
import { Link } from "react-router-dom"
import './Home.css'

const Home = () => {
  return (
    <>
    <p className='header'>อาการ</p>
    <div className='con'>
      
      <div className="grid-container">
       
          <div className="card">
            <Link to="/page1" style={{textDecoration: "none"}} >
              <button className='bTitle'>
                <span className="title" >อาการปวดท้อง</span>
              </button>
            </Link> 
            
        </div>
        
          <div className='card'>
            
            <Link to="/page2" style={{textDecoration: "none"}} >
              <button className='bTitle'>
                <span className="title" >อาการปวดที่นิ้ว</span>
              </button>
              
            </Link>  
          
        </div>
        
        
      </div>
    </div>
    </>
  )
}

export default Home