import { useState } from "react";
function Usecase4() {
    const [user, setUser] = useState({
        name:"Alex",
        email:"alex@gmail.com",
        country:"India"
    });
    const change=(name,email,countery) => {
        setUser({name,email,countery});
    }
    return ( 
        <div>
            <h3>Welcome {user.name}</h3>
            <ul>
                <li>{user.email}</li>
                <li>{user.country}</li>
            </ul>
            <button onClick={() =>change('Rahaman','rahaman@gmail.com','France')}>Change</button>
        </div>
     );
}

export default Usecase4;