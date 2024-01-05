import "./card.css";
import { capitalize, trim } from "./utils";
const Card = ({ product }) => {
  return (
    <li className="card-container">
      <img src={product.image} alt="" />
      <section>
        <div className="rating-container">
          <span>Rating -{product.rating.rate}</span>
          <span>₹{product.price}</span>
        </div>
        <div className="heading-container">
          <span className="product-title">{trim(product.title)}</span>
          <span className="product-category">
            {capitalize(product.category)}
          </span>
        </div>
        <div className="action-container">
          <span>{product.rating.count}</span>
          <button>Add To Cart</button>
        </div>
      </section>
    </li>
  );
};

export default Card;
