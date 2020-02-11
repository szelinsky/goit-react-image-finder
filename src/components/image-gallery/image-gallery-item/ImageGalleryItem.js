import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images, showModal }) => (
  <>
    {images.map(elem => (
			<li 
				key={elem.id} 
				className={css.ImageGalleryItem}
				onClick={() => (showModal(elem.largeImageURL))}
			>
        <img
          src={elem.webformatURL}
          alt=""
          className={css.ImageGalleryItemImage}
        />
      </li>
    ))}
  </>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  showModal: PropTypes.func.isRequired,
}
