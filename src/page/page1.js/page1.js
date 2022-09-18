import React ,{useState} from 'react'
import './page1.css'
import './page1_B.css'

import stomach from './asset/default-abs.png'
const Page1 = () => {

  const h2 = require('./asset/epigastrium-highlight.png')
  const image = {  h2 }
  const [selected, setSelected] = useState()
  const h2_2 = require('./asset/epigastrium-active.png')
  const image2 = {  h2_2 }
  const [selected2, setSelected2] = useState() 

  const h3 = require('./asset/luq-highlight.png')
  const image3 = {  h3 }
  const [selected3, setSelected3] = useState()
  const h3_2 = require('./asset/luq-active.png')
  const image3_ = {  h3_2 }
  const [selected3_, setSelected3_] = useState()

  const h4 = require('./asset/llq-highlight.png')
  const image4 = {  h4 }
  const [selected4, setSelected4] = useState()
  const h4_2 = require('./asset/llq-active.png')
  const image4_ = {  h4_2 }
  const [selected4_, setSelected4_] = useState()

  const h5 = require('./asset/suprapubic-highlight.png')
  const image5 = {  h5 }
  const [selected5, setSelected5] = useState()
  const h5_2 = require('./asset/suprapubic-active.png')
  const image5_ = {  h5_2 }
  const [selected5_, setSelected5_] = useState()

  const h6 = require('./asset/rlq-highlight.png')
  const image6 = {  h6 }
  const [selected6, setSelected6] = useState()
  const h6_2 = require('./asset/rlq-active.png')
  const image6_ = {  h6_2 }
  const [selected6_, setSelected6_] = useState()

  const h7 = require('./asset/ruq-highlight.png')
  const image7 = {  h7 }
  const [selected7, setSelected7] = useState()
  const h7_2 = require('./asset/ruq-active.png')
  const image7_ = {  h7_2 }
  const [selected7_, setSelected7_] = useState()

  const h8 = require('./asset/umbilicus-highlight.png')
  const image8 = {  h8 }
  const [selected8, setSelected8] = useState()
  const h8_2 = require('./asset/umbilicus-active.png')
  const image8_ = {  h8_2 }
  const [selected8_, setSelected8_] = useState()

  const h9 = require('./asset/all-over-highlight.png')
  const image9 = {  h9 }
  const [selected9, setSelected9] = useState()


  return (
    <>
    <p className='header_page1'>อาการปวดท้อง</p>  
    <div className='con_page1'>      
      <div className="grid-container_page1">           
        <div className="card_page1">        
            <div className="card_title_page1">จุดไหนที่คุณปวดมากที่สุด</div>        
              <img src={stomach}className="stomach"    alt='' ></img>
              
                <button className='b_stomach_1' onClick={() => {
                  setSelected(image.h2)
                  setSelected2(image2.h2_2)
                  }  
                }>.</button>
                
                <img src={selected} className="stomach" id='i'   alt='' ></img>
                <img src={selected2} className="stomach" alt=''></img>

                <button className='b_stomach_2' onClick={() => {
                  setSelected3(image3.h3)
                  setSelected3_(image3_.h3_2)
                  }  
                }>.</button>
                
                <img src={selected3} className="stomach" id='i'   alt='' ></img>
                <img src={selected3_} className="stomach" alt=''></img>

                <button className='b_stomach_3' onClick={() => {
                  setSelected4(image4.h4)
                  setSelected4_(image4_.h4_2)
                  }  
                }>.</button>
                
                <img src={selected4} className="stomach" id='i'   alt='' ></img>
                <img src={selected4_} className="stomach" alt=''></img>

                <button className='b_stomach_4' onClick={() => {
                  setSelected5(image5.h5)
                  setSelected5_(image5_.h5_2)
                  }  
                }>.</button>
                
                <img src={selected5} className="stomach" id='i'   alt='' ></img>
                <img src={selected5_} className="stomach" alt=''></img>

                <button className='b_stomach_5' onClick={() => {
                  setSelected6(image6.h6)
                  setSelected6_(image6_.h6_2)
                  }  
                }>.</button>
                
                <img src={selected6} className="stomach" id='i'   alt='' ></img>
                <img src={selected6_} className="stomach" alt=''></img>

                <button className='b_stomach_6' onClick={() => {
                  setSelected7(image7.h7)
                  setSelected7_(image7_.h7_2)
                  }  
                }>.</button>
                
                <img src={selected7} className="stomach" id='i'   alt='' ></img>
                <img src={selected7_} className="stomach" alt=''></img>

                <button className='b_stomach_7' onClick={() => {
                  setSelected8(image8.h8)
                  setSelected8_(image8_.h8_2)
                  }  
                }>.</button>
                
                <img src={selected8} className="stomach" id='i'   alt='' ></img>
                <img src={selected8_} className="stomach" alt=''></img>

                <button className='b_stomach_8' onClick={() => {
                  setSelected9(image9.h9)
                  setSelected8(image8.h8)
                  setSelected7(image7.h7)
                  setSelected6(image6.h6)
                  setSelected5(image5.h5)
                  setSelected4(image4.h4)
                  setSelected3(image3.h3)
                  setSelected(image.h2)
                  
                  }  
                }>.</button>
                
                <img src={selected9} className="stomach" id='i'   alt='' ></img>
           
        </div>
        <button className="card_submit_page1" >ต่อไป</button>
      </div>

    </div>

    
    </>
  )
}

export default Page1