import React, { Component } from 'react';
import './app.css';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './image-gallery/ImageGallery';
import Button from './button/Button';
import Modal from './modal/Modal';
import Loader from 'react-loader-spinner';
import { fetchImages } from '../fetcher.js';


class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    isModal: false,
    largeImgUrl: '',
    loading: true
  };

  async componentDidMount() {
    const data = await fetchImages();
    this.setState({
      images: data,
      loading: false
    });
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = await fetchImages(this.state.page, this.state.query);

    this.setState({
      images: data,
      page: 1,
      loading: false,
    });
  };

  showModal = largeImgUrl => {
    this.setState({
      isModal: true,
      largeImgUrl
    });
  };

  closeModal = e => {
    if (e.currentTarget === e.target || e.key === 'Escape') {
      this.setState({
        isModal: false
      });
    }
  };

  loadMore = async currentPage => {
    currentPage++;
    const currentQuery = this.state.query ? this.state.query : 'kitten'
    const data = await fetchImages(currentPage, currentQuery);

    this.setState(prevState => ({
      images: [...prevState.images, ...data],
      page: currentPage,
      loading: false,
    }));

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  render() {
    const { query, images, isModal, largeImgUrl, page, loading } = this.state;

    return (
      <>
        {isModal && (
          <Modal
            onShowModal={largeImgUrl}
            onHandleKeyPress={this.handleKeyPress}
            closeModal={this.closeModal}
          />
        )}
        <Searchbar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchQuery={query}
        />

        {loading ? (
          <div className="center">
            <Loader type="ThreeDots" color="#F62459" height={100} width={100} />
          </div>
        ) : (
          <>
            <ImageGallery images={images} showModal={this.showModal} />

            <Button
              onPage={page}
              onLoadMore={this.loadMore}
              title="Load more"
            />
          </>
        )}
      </>
    );
  }
}

export default App;
