import { useState } from "react";
import Parent from "./Parent";
function GrandParent() {
    const [data, setData] =useState('Hello for Grand Parent');
    return ( 
        <div style={{border: '2px solid red'}} className="my-2">
        <h3>Grand Parent Component</h3>
        <Parent data ={data} />
        </div>
     );
}

export default GrandParent;