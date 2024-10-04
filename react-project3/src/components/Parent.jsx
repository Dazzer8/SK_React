import Child from "./Child";

function Parent({data}) {
    return ( 
        <div style={{border: '2px solid blue'}} className="my-2">
        <h3>Parent Components</h3>
        <Child data ={data}/>
        </div>
     );
}

export default Parent;