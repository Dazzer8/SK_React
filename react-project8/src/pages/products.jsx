import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
    const [Products,setProducts] = useState([]);
    const fetchData = async ()=> {
        try {
            const resp = await axios.get('https://dummyjson.com/products');
        }catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    },[])
    return ( 
        <div>
            <h3></h3>
        </div>
     );
}

export default Products;