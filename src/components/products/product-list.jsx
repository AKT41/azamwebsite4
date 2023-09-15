import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

import { productList } from "./productsdb";

import "./style/style.css";

import "./style/product-card.css";
import { Link } from "react-router-dom";

function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Initially, display all products
    setFilteredProducts(productList.products);
  }, []); // The empty dependency array ensures this effect runs once on mount

  function performSearch(query) {
    const filtered = productList.products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  function handleSearch(event) {
    const query = event.target.value;
    setSearchQuery(query);
    performSearch(query);
  }
  return (
    <>
      <div className="app-container mt-20 w-full mx-auto max-w-7xl min-h-[100vh]">
        <div className="app-content">
          <div className="app-content-header">
            <Fade top>
              <h1 className="app-content-headerText">Ürünlerimiz</h1>
            </Fade>
          </div>
          <div className="app-content-actions">
            <Fade left>
              <input
                className="search-bar border border-solid"
                placeholder="Ürün Ara..."
                type="text"
                value={searchQuery}
                onChange={handleSearch}
              />
            </Fade>
          </div>
          <div className="products-area-wrapper gridView">
            <div className="products-header">
              <div className="product-cell image">
                Ürünler
                <button className="sort-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                    />
                  </svg>
                </button>
              </div>
              <div className="product-cell category">
                Kullanım Alanı
                <button className="sort-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                    />
                  </svg>
                </button>
              </div>
              <div className="product-cell status-cell">
                Stok
                <button className="sort-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                    />
                  </svg>
                </button>
              </div>
              <div className="product-cell price">
                Fiyat
                <button className="sort-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-screen-2xl">
              {filteredProducts.map((product) => (
                <div class="wrapper" key={product.id}>
                  <div class="container">
                    {/* <div
                      class="top "
                      style={{ background: `url(${product.image}) no-repeat center center` }}
                    ></div> */}
                    <div className="w-full h-full">
                      <img
                        src={product.image}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                      <div class="bottom"></div>
                      <div class="left">
                        <div class="details">
                          <h1>{product.name}</h1>
                          <p>£250</p>
                        </div>
                        <div class="buy">
                          <i class="material-icons">add_shopping_cart</i>
                        </div>
                      </div>
                      <div class="right">
                        <div class="done">
                          <i class="material-icons">done</i>
                        </div>
                        <div class="details">
                          <h1>Chair</h1>
                          <p>Added to your cart</p>
                        </div>
                        <div class="remove">
                          <i class="material-icons">clear</i>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div class="inside">
                    <div class="icon">
                      <i class="material-icons">info_outline</i>
                    </div>
                    <div class="contents">
                      <table>
                        <tr>
                          <th>Width</th>
                          <th>Height</th>
                        </tr>
                        <tr>
                          <td>3000mm</td>
                          <td>4000mm</td>
                        </tr>
                        <tr>
                          <th>Something</th>
                          <th>Something</th>
                        </tr>
                        <tr>
                          <td>200mm</td>
                          <td>200mm</td>
                        </tr>
                        <tr>
                          <th>Something</th>
                          <th>Something</th>
                        </tr>
                        <tr>
                          <td>200mm</td>
                          <td>200mm</td>
                        </tr>
                        <tr>
                          <th>Something</th>
                          <th>Something</th>
                        </tr>
                        <tr>
                          <td>200mm</td>
                          <td>200mm</td>
                        </tr>
                      </table>
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
