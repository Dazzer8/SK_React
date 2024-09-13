import{useState} from "react";
function UseCase3() {
    const[flag, setFlag] = useState(false);
    const hindleClick = () => {
        setFlag(!flag);
    }

    return ( 
        <div className="p-2 mt-2" style={{border: '2px solid red'}}>
            {flag? <p>My Data</p> : ''}
            <button onClick={hindleClick} className="btn btn-primary">
                {flag? 'Hide':'Show'}
            </button>
        </div>
     );
}

export default UseCase3;