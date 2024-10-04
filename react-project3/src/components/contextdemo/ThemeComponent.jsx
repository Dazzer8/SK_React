import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function ThemeComponent() {
    const {them}=useContext(ThemeContext)
    return ( 
        <div style={{
            background:them==='Light'?'#fff':'#333',
            color:them==='Light'?'#333':'#fff',
            padding:'20px',
            textAlign:'center'
        }}>
            <h3>Theme Component</h3>
            <button onClick={increment}>Add</button>
        </div>
     );
}

export default ThemeComponent;