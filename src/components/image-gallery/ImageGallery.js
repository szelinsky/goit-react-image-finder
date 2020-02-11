import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from './image-gallery-item/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, showModal }) => (
  <ul className={css.ImageGallery}>
    <ImageGalleryItem images={images} showModal={showModal} />
  </ul>
);

export default ImageGallery;

ImageGallery.propTypes = {
  showModal: PropTypes.func.isRequired,
}