import React from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types'


const Searchbar = ({ handleChange, handleSubmit, searchQuery }) => (
  <header className={css.Searchbar}>
    <form className={css.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={css.SearchFormButton}>
        <span className={css.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={handleChange}
        value={searchQuery}
      />
    </form>
  </header>
);

export default Searchbar;

Searchbar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  searchQuery: PropTypes.string,
}