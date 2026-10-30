import { useState } from 'react'

const Logo_Info = ({onfinish,onback}) => {

const[logo,setLogo]=useState()
  const back=()=>{
     onback({})
   }   
 const finish=()=>{
     onfinish({})
    }
  return (
    <div className='    '>
        <div>
           <h1>Add your logo and hiring plans</h1>
           <p>Optional:You can change everything later.</p>
        </div>
        <div>
           <h1>Company logo(optional)</h1>
         <input type="file"
           value={logo}
           onChange={(e)=>setLogo(e.target.value)}
         />

        
          <h3> Hpw many people do you plan to hire in the next 6 months</h3>
          <Selection >
            <option>Not ure yet</option>
            <option>10</option>
            <option>20</option>
          </Selection>
        </div>
        <div>
            <button onClick={back}>Back</button>
            <button onClick={finish}>Finish</button>
        </div> 
    </div>
  )
}

export default Logo_Info