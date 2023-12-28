import { useEffect, useState } from "react"

export const CountDown =(props)=>{
    const [count,setCount]=useState(10)
    // console.log(props.setDisable)
    useEffect(()=>{
        if(count===0)
        {
             props.setDisable(true)
            return 
        }
      let timer =setInterval(()=>{
        setCount(count-1)
      },1000)
      return(()=>{
        clearInterval(timer)
      })
    },[count])

    return(
        <div>{count}</div>
    )
}