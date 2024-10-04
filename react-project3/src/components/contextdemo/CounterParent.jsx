import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";
import CounterChild from "./CounterChild";

function CounterParent() {
    const {count}=useContext(CounterContext)
    return ( 
    <div>
        <h3>Counter Parent</h3>
        <CounterChild />

    </div> );
}

export default CounterParent;