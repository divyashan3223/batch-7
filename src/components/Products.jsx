import { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../api/products";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts([...data]);
      })

      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (products) {
    return (
      <div>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h4>{product.title}</h4>
              <button onClick={async () => await deleteProduct(product.id)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <h1>fetching data products</h1>;
  }
};

export default Products;
