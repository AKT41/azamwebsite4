import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

import { productList } from "./productsdb";

import "./style/style.css";
import "./style/product-card.css";
import { useTranslation } from "react-i18next";

function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { t } = useTranslation();

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
          <div className="app-content-header mt-8">
            <Fade top>
              <h1 className="app-content-headerText">{t("NavbarProducts")}</h1>
            </Fade>
          </div>
          <div className="app-content-actions mb-5">
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
            <Fade bottom cascade>
              <div className="flex flex-wrap items-center justify-center gap-4 md:max-w-screen-2xl overflow-hidden">
                {filteredProducts.map((product) => (
                  <div className="item group overflow-hidden" key={product.id}>
                    <div className="item-wrapper">
                      <div className="content-wrapper">
                        <div className="img-container">
                          <div className="bg-square transition-all duration-300 group-hover:rotate-0 rotate-45"></div>
                          <img
                            className="item-img transition-all duration-300 scale-125 group-hover:scale-150 hover:z-10 relative"
                            src={product.listImage}
                            alt={product.name}
                          />
                        </div>

                        <div className="content-text">
                          <div
                            className="item-name line-clamp-1"
                            title={product.name}
                          >
                            {product.name}
                          </div>
                          <div className="item-subtext-container">
                            <span className="item-subtext subtext-mfr">
                              Azam Tx{" "}
                            </span>
                            <span className="item-subtext subtext-model">
                              #TX1512d
                            </span>
                          </div>
                        </div>
                      </div>
                      <Link
                        to={`/${t("NavbarProducts")}/${product.slug}`}
                        className="view-more-btn peer flex items-center justify-center gap-2"
                      >
                        {t("ProductDetails")}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-plus view-symbol rotate-animate group-hover:rotate-[360deg]"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          strokeWidth="1.4"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M12 5l0 14"></path>
                          <path d="M5 12l14 0"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
