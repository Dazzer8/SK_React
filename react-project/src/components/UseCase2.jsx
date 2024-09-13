import { useState } from "react";

function UseCase2() {
    const [count, setCount] = useState(0);
    const increment =() => {
        setCount(count+1);
    }
    const decrement =() => {
        if(count>0)
        setCount(count-1);
        else
        alert("Negative values not allowed")

    }
    return ( 
        <div>
            <h3>count component : {count} </h3>
            <button className="btn btn-primary"
            onClick={increment}>+</button>
            <button className="btn btn-secondary"
            onClick={decrement}>-</button>
        </div>
     );
}

export default UseCase2;