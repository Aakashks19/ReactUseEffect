import { useRef, useEffect } from "react"
const Refer = () => {
    const inputref = useRef(0);
    useEffect(()=>{
        if (inputref.current)
        {
            inputref.current.focus()
        }
    },[])
  return (
    <div style={{
        margin: "30px"
    }}>
        <input type="text" ref={inputref}/>
    </div>
  )
}

export default Refer