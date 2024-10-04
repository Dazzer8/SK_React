import { useEffect, useState } from "react";
function Examle1() {
    const [count, setCount] = useState(0);
    const [name,setName] =useState('');
    useEffect(() => {
        console.log('Component Loaded');
    },[]) //give empty dependency array to run only once
    useEffect(()=> {
        console.log('Count Updated:' ,count);
    },[count]) //treggered when count state update
    useEffect(()=> {
        console.log('Count Updated:' ,name);
    },[name]) //treggered when name state update

    return ( 
       <div>
        <h3>Hello from UseCase</h3>
        <h4>{count} Welcome {name}</h4>
        <button onClick={()=>setCount(count+1)}>+</button>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
       </div>
     );
}

export default Examle1;