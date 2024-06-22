import React, { Component } from 'react';
import './Carousel.css';
import { CarouselData } from '../data/CarouselData';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide() {
    const newIndex = (this.state.currentIndex + 1) % CarouselData.length;
    this.setState({ currentIndex: newIndex });
  }

  prevSlide() {
    const newIndex = (this.state.currentIndex - 1 + CarouselData.length) % CarouselData.length;
    this.setState({ currentIndex: newIndex });
  }

  render() {
    return (
      <div className="carousel">
        <button onClick={this.prevSlide} className="carousel-button prev-button">
          <ArrowBackIosIcon />
        </button>
        <div className="carousel-image">
          <img src={CarouselData[this.state.currentIndex].image} alt="carousel" />
        </div>
        <button onClick={this.nextSlide} className="carousel-button next-button">
          <ArrowForwardIosIcon />
        </button>
      </div>
    );
  }
}

export default Carousel;
