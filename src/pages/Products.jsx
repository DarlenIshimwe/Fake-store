import { useEffect,useState} from "react";

function Products(){
    const [products,setProducts] = useState([])
    const fetchData =()=>{
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));
    }
    useEffect(()=>{
    fetchData()
    },[])
    return(

        <div>
            {/* {products.map(product=>(<li>{}</li>))} */}
        </div>
    )
}
export default Products;