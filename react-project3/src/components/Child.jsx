function Child({data}) {
    return ( 
        <div style={{border: '2px solid black'}} className="my-2">
        <h3>Child Components</h3>
        <p>Data Coming From Parent : {data}</p>
        </div>
     );
}

export default Child;