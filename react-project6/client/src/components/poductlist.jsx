import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
    const [products,setProducts] =useState(null);
    const fetchData = async()=> {
        try {
            const resp = await axios.get('http://localhost:3000/products');
            setTimeout(()=> {
                setProducts(resp.data);
            },3000)
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=> {
        fetchData();
    },[])
    return ( 
        <div>
            {
                products ?
                <table className="table table-bordered table-spriped">
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Price</th><th>Category</th></tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            : <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
            }
            
        </div>
     );
}

export default ProductList;