import { useState, useEffect } from "react";
const UseEffect = () => {
    // const [search, setSearch] = useState("");
    const [item, setentry] = useState([]);

    const handlechange = async (id) => {
       const updated = item.map((i) =>
        i.id === id ? { ...i, completed: !i.completed } : i
    );
    setentry(updated);
        
        
    }

    useEffect(() => {
        async function fetchdata() {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos");
            const users = await res.json();
            setentry(users);
        }
        fetchdata();
    }, [])
    return (
        <div>
            {/* <div>
            <input type="text" name="" id="" value={search} onChange={e=>setSearch(e.target.value)}/>
        </div> */}
            <div className='dataset'>
                {/* {console.log(item)} */}
                {
                    item.map((i) => (
                        <div className="flex">
                            
                            <div className="list" style={{ border: i.completed ? "solid green" : "solid red" }}>{i.id} - {i.title}  </div>
                            <button onClick={() => handlechange(i.id)}>Click</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default UseEffect
