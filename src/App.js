import { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "react-loader-spinner";
import Modal from "./components/Modal";
import getImages from "./api/imageApi";

class App extends Component {
  state = {
    query: "",
    page: 1,
    images: [],
    haveMore: true,
    loading: false,
    showModal: false,
    largeImg: "",
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      const { query, page } = this.state;
      this.setState({ loading: true });
      getImages(query, page)
        .then((result) =>
          this.setState({
            images: [...result.hits],
            page: page + 1,
          })
        )
        .finally(() => {
          this.setState({ loading: false });
        });
    }
    if (
      prevState.images.length < this.state.images.length &&
      prevState.images.length !== 0
    ) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }
  handlerSubmit = (inputQuery) => {
    this.setState({
      query: inputQuery,
      page: 1,
      images: [],
    });
  };
  loadMore = () => {
    const { query, page, images } = this.state;
    this.setState({ loading: true });
    getImages(query, page)
      .then((result) =>
        this.setState({
          images: [...images, ...result.hits],
          page: page + 1,
          haveMore: result.totalHits > page * 12,
        })
      )
      .finally(() => {
        this.setState({ loading: false });
      });
  };
  openModal = (e) => {
    this.setState({
      showModal: true,
      largeImg: e.target.dataset.src,
    });
  };
  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handlerSubmit} />
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        {!this.state.loading &&
          this.state.haveMore &&
          this.state.images.length > 0 && <Button loadMore={this.loadMore} />}
        {this.state.loading && (
          <Loader
            type="Circles"
            color="#3f51b5"
            height={50}
            width={50}
            timeout={2000} //3 secs
          />
        )}
        {this.state.showModal && (
          <Modal img={this.state.largeImg} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
