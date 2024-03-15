import ProductCard from "./ProductCard"
import productList from "./productsMockData.json"
const Products = ()=>{
    const {products} = productList
    return (
        <div className="p-2">
            {products.map((product)=><ProductCard key={product.id} {...product}/>)}
        </div>
    )
}

export default Products