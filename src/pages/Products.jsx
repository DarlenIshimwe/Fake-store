import { useEffect,useState} from "react";
import {ReuseableCard} from "../component/ReuseableCard"

function Products(){
    const [products,setProducts] = useState([])
    const fetchData =()=>{
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProducts(data));
    }
    useEffect(()=>{
    fetchData()
    },[])
    return(

        <div>
            <ReuseableCard />
        </div>
    )
}
export default Products;