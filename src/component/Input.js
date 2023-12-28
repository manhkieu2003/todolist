import { useEffect, useState } from "react"
import OtpInput from 'react-otp-input';
import { CountDown } from "./CountDown";

export const Input =(props)=> {

     const [otp,setOtp]=useState('')
     console.log(props)
// check otp 
    console.log('check',otp)
    const hanleChange =(otp)=>{
      setOtp(otp)
      props.setUseotpparent(otp)
    }
    const handleConfirmOtp=()=>{
         props.handleSubmitOtp()
         setOtp('')
    }
    const handleClear=()=>{
      setOtp('')
    }
    return(
        <>
          <div className="input-otp-containner">
            <div className="Title">Enter verification code</div>
            <OtpInput
              value={otp}
              onChange={hanleChange}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={ (props) => <input {...props} />}
              inputStyle={'input-customize'}
            />
            <div className="timer">
              <CountDown
                 setDisable={props.setDisablebtn}
              />
            </div>
            <div className="action">
               <button className="clear" onClick={handleClear}>Clear</button>
               <button className="getotp"
                disabled={props.disabledbtn}
                onClick={()=>handleConfirmOtp()}
               >Get OTP</button>
            </div>
          </div>
        </>
    )
}