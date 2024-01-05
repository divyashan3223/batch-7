import { useEffect, useState } from "react";
import "./container.css";
import Card from "../card/Card";
const Container = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts([...data]));
  }, []);

  return (
    <ul className="container">
      {products.map(product => (
        <Card product={product} key={product.id} />
      ))}
    </ul>
  );
};

export default Container;
