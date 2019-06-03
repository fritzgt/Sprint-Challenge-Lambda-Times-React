import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: "",
      currentImg: null,
      currentImg: null
    };
  }
  componentDidMount() {
    this.setState({
      carouselData: carouselData,
      imgLength: carouselData.length,
      currentImg: 0
    });
  }

  leftClick = () => {
    console.log("Current IMG" + this.state.currentImg);
    this.setState(prevState => {
      return {
        currentImg: this.state.currentImg - 1
      };
    });
  };

  rightClick = () => {
    console.log("Current IMG" + this.state.currentImg);
    // console.log("Current IMG" + this.state.carouselData[this.state.currentImg]);
    this.setState(prevState => {
      return {
        currentImg: this.state.currentImg + 1
      };
    });
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.carouselData[this.state.currentImg]}
        style={{ display: "block" }}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
