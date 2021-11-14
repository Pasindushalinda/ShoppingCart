import { useEffect, useState } from 'react';
import agent from '../../app/api/agent';
import LoadingComponent from '../../app/layout/LoadingComponent';
import ProductList from './ProductList';

export default function Catalog() {

  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.catalog.list().then((products) => setProduct(products))
      .catch(error=>console.log(error))
      .finally(()=>setLoading(false));
  }, [])

  if (loading) return <LoadingComponent message='Loading products...'/>

  return (
    <>
      <ProductList products={products} />
    </>
  )
}