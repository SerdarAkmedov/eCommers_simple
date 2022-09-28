import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API = "https://api.escuelajs.co/api/v1/products";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = () => {
      const response = fetch(API)
        .then((res) => res.json())
        .then((resp) => {
          setData(resp);
          setFilter(resp);
        }, []);

      if (componentMounted) {
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setFilter(data);
            }}
          >
            Hemmesi
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("erkek esik");
            }}
          >
            Erkek Esik
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("ayal esik");
            }}
          >
            Ayal Esik
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("say-sep");
            }}
          >
            Say-sepler
          </button>
          <button
            onClick={() => {
              filterProduct("elektronika");
            }}
            className="btn btn-outline-dark me-2"
          >
            Elektronikalar
          </button>
        </div>
        {filter.map((item, index) => {
          return (
            <div className="col-md-3 mb-3" key={item.id}>
              <div className="card h-100 text-center p-2">
                <img
                  src="https://1l1qtl3ivlys18bq884b04ci-wpengine.netdna-ssl.com/wp-content/uploads/2022/06/1058137_070_1-300x300.jpg"
                  className="card-img-top"
                  alt={item.title}
                  height="350px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">{item.title}...</h5>
                  <p className="card-text">${item.price}</p>
                  <Link
                    to={`/products/${item.id}`}
                    className="btn btn-outline-dark"
                  >
                    Satyn almak
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="text-center fw-bolder display-6">Sonky Harytlar</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">{<ShowProducts />}</div>
      </div>
    </div>
  );
}

export default Products;
