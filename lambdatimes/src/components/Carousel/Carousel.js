import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: "",

      currentImg: null
    };
  }
  componentDidMount() {
    this.setState({
      carouselData: carouselData,

      currentImg: 0
    });
  }

  leftClick = () => {
    // console.log("Current IMG" + this.state.currentImg);
    const imgLength = this.state.carouselData.length - 1;
    this.setState(prevState => {
      if (this.state.currentImg > 0) {
        return {
          currentImg: this.state.currentImg - 1
        };
      } else {
        return {
          currentImg: imgLength
        };
      }
    });
  };

  rightClick = () => {
    // console.log("Current IMG" + this.state.currentImg);
    const imgLength = this.state.carouselData.length - 2;
    // console.log("Current " + this.state.carouselData[this.state.currentImg]);
    this.setState(prevState => {
      if (this.state.currentImg <= imgLength) {
        return {
          currentImg: prevState.currentImg + 1
        };
      } else {
        return {
          currentImg: 0
        };
      }
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
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
