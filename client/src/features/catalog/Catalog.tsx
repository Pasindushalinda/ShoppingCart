import { useEffect, useState } from 'react';
import ProductList from './ProductList';

export default function Catalog() {

    const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProduct(data))

  }, [])

    return (
        <>
            <ProductList products={products} />
        </>
    )
}