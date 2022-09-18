import React, {useState} from 'react'
import './page2.css'
import './page2_B.css'
import hand from './asset/default-finger.png'

const Page2 = () => {
  
  
  const h2 = require('./asset/dip-highlight.png')

  const image = {  h2 }
  const [selected, setSelected] = useState()
  const h2_2 = require('./asset/dip-active.png')
  const image2 = {  h2_2 }
  const [selected2, setSelected2] = useState() 
  
  const h3 = require('./asset/pip-highlight.png')
  const image3 = {  h3 }
  const [selected3, setSelected3] = useState() 
  const h3_2 = require('./asset/pip-active.png')
  const image3_ = {  h3_2 }
  const [selected3_2, setSelected3_2] = useState()
  
  const h4 = require('./asset/mcp-highlight.png')
  const image4 = {  h4 }
  const [selected4, setSelected4] = useState() 
  const h4_2 = require('./asset/mcp-active.png')
  const image4_ = {  h4_2 }
  const [selected4_2, setSelected4_2] = useState()

  const h5 = require('./asset/others-highlight.png')
  const image5 = {  h5 }
  const [selected5, setSelected5] = useState()

  return (
    <>
    <p className='header_page2'>อาการปวดที่นิ้ว</p>  
    <div className='con_page2'>      
      <div className="grid-container_page2">           
        <div className="card_page2">        
            <div className="card_title">จุดไหนที่คุณปวดมากที่สุด</div>        
            <img src={hand}className="hand"    alt='' ></img>
            
              <button className='b_hand_top_1' onClick={() => {
                
                  setSelected(image.h2)
                  setSelected2(image2.h2_2)
                
              }
              }>.</button>
              <button className='b_hand_top_2' onClick={() => {
                setSelected(image.h2)
                setSelected2(image2.h2_2)
                }  
              }>.</button>
              <button className='b_hand_top_3' onClick={() => {
                setSelected(image.h2)
                setSelected2(image2.h2_2)
                }  
              }>.</button>
              <button className='b_hand_top_4' onClick={() => {
                setSelected(image.h2)
                setSelected2(image2.h2_2)
                }  
              }>.</button>
             
            <img src={selected} className="hand" id='i'   alt='' ></img>
            <img src={selected2} className="hand" alt=''></img>
            
            <button className='b_hand_mid_1' onClick={() => {
                
                setSelected3(image3.h3)
                setSelected3_2(image3_.h3_2)
              
            }
            }>.</button>
            <button className='b_hand_mid_2' onClick={() => {
                
                setSelected3(image3.h3)
                setSelected3_2(image3_.h3_2)
              
            }
            }>.</button>
            <button className='b_hand_mid_3' onClick={() => {
                
                setSelected3(image3.h3)
                setSelected3_2(image3_.h3_2)
              
            }
            }>.</button>
            <button className='b_hand_mid_4' onClick={() => {
                
                setSelected3(image3.h3)
                setSelected3_2(image3_.h3_2)
              
            }
            }>.</button>
            <button className='b_hand_mid_5' onClick={() => {
                
                setSelected3(image3.h3)
                setSelected3_2(image3_.h3_2)
              
            }
            }>.</button>
            
            <img src={selected3} className="hand" id='i'   alt='' ></img>
            <img src={selected3_2} className="hand" alt=''></img>

            <button className='b_hand_mid_5' onClick={() => {
                
                setSelected3(image3.h3)
                setSelected3_2(image3_.h3_2)
              
            }
            }>.</button>

            <img src={selected4} className="hand" id='i'   alt='' ></img>
            <img src={selected4_2} className="hand" alt=''></img>

            <button className='b_hand_bottom_1' onClick={() => {
                
                setSelected4(image4.h4)
                setSelected4_2(image4_.h4_2)
              
            }
            }>.</button>
            <button className='b_hand_bottom_2' onClick={() => {
                
                setSelected4(image4.h4)
                setSelected4_2(image4_.h4_2)
              
            }
            }>.</button>
            <button className='b_hand_bottom_3' onClick={() => {
                
                setSelected4(image4.h4)
                setSelected4_2(image4_.h4_2)
              
            }
            }>.</button>
            <button className='b_hand_bottom_4' onClick={() => {
                
                setSelected4(image4.h4)
                setSelected4_2(image4_.h4_2)
              
            }
            }>.</button>
            <button className='b_hand_bottom_5' onClick={() => {
                
                setSelected4(image4.h4)
                setSelected4_2(image4_.h4_2)
              
            }
            }>.</button>
           
           <img src={selected5} className="hand" id='i'   alt='' ></img>

           <button className='b_hand_all' onClick={() => {
                
                setSelected5(image5.h5)
                
              
            }
            }>.</button>

        </div>
        <button className="card_submit" >ต่อไป</button>
        
      </div>
    </div>

    
    </>
  )
}

export default Page2