import React from 'react'
import { Link } from "react-router-dom"
import './Nav.css'

const Nav = () => {
  return (
    <div className='con_nav'>
        <div className="dropdown">
            <i className="fas fa-bars"  id="fasBars"/>
                <div className="dropdown-content">                   
                    
                    <Link to="/page1" style={{textDecoration: "none"}}  ><span >อาการปวดท้อง</span></Link>
                    <Link to="/page2" style={{textDecoration: "none"}}  ><span >อาการปวดนิ้ว</span></Link>
                    
                </div>
        </div>
        <div >
        <Link to="/" style={{textDecoration: "none" }}  ><span className="Home_nav">หน้าแรก</span></Link>
        </div> 
        
            
 
    </div>
  )
}

export default Nav