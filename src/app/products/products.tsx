import getProducts from "./actions/get-products"
import ProductsGrid from "./products-grid"

export default async function Products() {
  const response = await getProducts()
  
  const products = Array.isArray(response) ? response : []

  return <ProductsGrid products={products} />
}
