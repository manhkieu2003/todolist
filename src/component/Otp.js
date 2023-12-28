import { useState } from "react"
import { Genante } from "./Generrate"
import { Input } from "./Input"
import './OTP.scss'
const OTP =()=>{
     const [orgotpparent,setOrgotpparent]=useState('')
     const [useotpparent,setUseotpparent]=useState('')
     const [disablebtn,setDisablebtn]=useState(false)
     console.log(typeof(orgotpparent))
     console.log(typeof(useotpparent))
     const handleSubmitOtp=()=>{
       
        if(+orgotpparent===+useotpparent)
        {
            alert("Correct")
        }else{
            alert("InCorrect")
        }
     }
    return(
        <div className="otp-parent-container">
        <Genante setOrgotpparent={setOrgotpparent}/>
        <Input 
        setUseotpparent={setUseotpparent}
        handleSubmitOtp={handleSubmitOtp}
        disablebtn={disablebtn}
        setDisablebtn={setDisablebtn}
        />
        </div>
        
    )
}
export default OTP