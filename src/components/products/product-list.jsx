import React, { useState } from "react";
import { Fade } from "react-reveal";

import "./style/style.css";

function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const productList = {
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "https://picsum.photos/200/300",
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "https://picsum.photos/200/300",
      },
      {
        id: 3,
        name: "Product 3",
        price: 300,
        image: "https://picsum.photos/200/300",
      },
      {
        id: 4,
        name: "Product 4",
        price: 300,
        image: "https://picsum.photos/200/300",
      },
      {
        id: 15,
        name: "Product 15",
        price: 1500,
        image: "https://picsum.photos/200/300",
      },
    ],
  };

  function performSearch(query) {
    const filtered = productList.products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  function handleSearch(event) {
    const query = event.target.value;
    setSearchQuery(query);
    performSearch(query); // Arama işlemini tetikle
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
            {filteredProducts.map((product) => (
              <div
                className="products-row"
                style={{
                  animationName: "none!important",
                }}
                key={product.id}
              >
                <a href="#">
                  <button className="cell-more-button">Ürünü İncele</button>
                </a>
                <a href="#">
                  <div className="product-cell image">
                    <img
                      src={product.image}
                      alt="redsi"
                      className="transition-all duration-500 ease-in-out select-none"
                    />

                    <span className="capitalize">{product.name}</span>
                    <div className="product-cell status-cell">
                      <span className="cell-label">Stok:</span>
                      <span className="status active">mevcut</span>
                    </div>
                    <div className="product-cell category">
                      <span className="cell-label">Kategori:</span>
                      {product.name}
                    </div>
                    <div className="product-cell price">
                      <span className="cell-label">Fiyat:</span>
                      <span className="!text-sm">{product.price}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
