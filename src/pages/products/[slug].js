import React from "react";
import { Link, useParams } from "react-router-dom";
import { productList } from "../../components/products/productsdb";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import "./style/style.css";

function ProductDetails() {
  const { slug } = useParams();
  const product = productList.products.find((p) => p.slug === slug);

  return (
    <>
      <section
        className="text-gray-700 body-font overflow-hidden bg-white"
        style={{
          fontFamily: "Gilroy-Regular",
        }}
      >
        <div className="container px-5 py-36 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <Slider>
              {product.image.map((img) => (
                <img
                  alt="ecommerce"
                  className="select-none object-contain object-center rounded-lg h-64"
                  src={img}
                />
              ))}
            </Slider>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2
                className="text-sm title-font text-gray-500 tracking-widest"
                style={{
                  fontFamily: "Gilroy-Light",
                }}
              >
                AzamTx
              </h2>
              <h1
                className="text-gray-900 text-3xl title-font font-medium mb-4"
                style={{
                  fontFamily: "Gilroy-SemiBold",
                }}
              >
                {product.name}
              </h1>
              <p className="leading-relaxed mb-7">{product.description}</p>
              <div className="flex justify-between">
                <div>
                  <button
                    className="flex ml-auto text-white bg-slate-500 border-0 py-3 px-6 focus:outline-none transition-all duration-200 hover:bg-green-600 rounded"
                    style={{
                      fontFamily: "Gilroy-SemiBold",
                    }}
                  >
                    Teknik Özellikleri
                  </button>
                </div>{" "}
                <div>
                  <button
                    className="flex ml-auto text-white bg-green-500 border-0 py-3 px-6 focus:outline-none transition-all duration-200 hover:bg-green-600 rounded"
                    style={{
                      fontFamily: "Gilroy-SemiBold",
                    }}
                  >
                    Bilgi Al
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
