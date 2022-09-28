import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      )
        .then((res) => res.json())
        .then((resp) => {
          setProduct(resp);
        });
    };

    getProduct();
  }, []);

  const ShowProduct = () => {
    // const {name} = product.category;
    const { title } = product;
    return (
      <>
        <div className="col-md-6">
          <img
            src="https://1l1qtl3ivlys18bq884b04ci-wpengine.netdna-ssl.com/wp-content/uploads/2022/06/1058137_070_1-300x300.jpg"
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-5">{title}</h1>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            onClick={() => addProduct(product)}
            className="btn btn-outline-dark"
          >
            Sebede goş!
          </button>
          <Link to="/cart" className="btn btn-dark ms-3">
            Sebedim
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">{<ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
