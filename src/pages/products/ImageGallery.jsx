import React, { useState } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageGallery = ({ product }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="image-gallery">
        {product.image.map((img, index) => (
          <img
            key={index}
            alt="ecommerce"
            className="select-none object-contain object-center rounded-lg h-64"
            src={img}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Gallery"
        className="image-gallery-modal"
        overlayClassName="image-gallery-overlay"
      >
        <Carousel selectedItem={selectedImageIndex}>
          {product.image.map((img, index) => (
            <div key={index}>
              <img alt="ecommerce" src={img} />
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
};

export default ImageGallery;
