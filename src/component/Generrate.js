import { useState } from "react"

export const Genante =(props)=> {
    const [org,setOrg]=useState("")
    const hanleClick=()=>{
        const otp = Math.floor(100000 + Math.random() *900000)
        setOrg(otp)
        props.setOrgotpparent(otp)
    }
    return(
        <>
         <button onClick={hanleClick} className="genante">Genante</button>
         <div className="text">Your otp : {org}</div>
        </>
    )
}