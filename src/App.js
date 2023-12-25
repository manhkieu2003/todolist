import { useRef, useState } from "react"

function App() {
  const sotore = JSON.parse(localStorage.getItem('jobs'))
  
  const [job ,setJob]=useState('')

  const [jobs,setJobs]= useState(
    sotore
  )
  const inputref =useRef()
  console.log(inputref)
  console.log(jobs)
  const handleOnClick=()=>{
    let todo={
      id:'abc',name:job
    }
    //  setJobs([...jobs,todo])
    setJobs(prev =>{
      const newJobs =[...prev,todo]
      console.log(newJobs)
      const jsonJob = JSON.stringify(newJobs)
      console.log(jsonJob)
      localStorage.setItem('jobs',jsonJob)
      return newJobs
    })
     
     
    setJob('')
    inputref.current.focus()
  }
  const hanleDelete=(id)=>{
  let crr = [...jobs]
  //2 cách 
   // crr = crr.filter(item => item.id !==id)
   crr.splice(crr.findIndex(item => item.id ===id),1)
   console.log(crr)
   setJobs(crr)
 
  }
  return (
    <div style={{ padding: '0 32px' }}>
       <input ref={inputref} value={job} onChange={e=>setJob(e.target.value)}/>
       <button onClick={handleOnClick}>Add</button>
       <div>Listto do:</div>
       <ul>
         {jobs.map((item,index)=>{
           return <li key={index}>{item.name}
           <span id={item.id} onClick={()=>hanleDelete(item.id)}>X</span>
           </li>
         })}
         
       </ul>
           
         
       
    </div>

  )
}
export default App