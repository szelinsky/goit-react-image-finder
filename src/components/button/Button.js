import React from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types'


const Button = ({ title, onLoadMore, onPage, onQuery}) => (
  <button className={css.Button} onClick={() => onLoadMore(onPage)} type="button">
    {title}
  </button>
);

export default Button;

Button.protoTypes = {
  title: PropTypes.string.isRequired,
  onPage: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
}
