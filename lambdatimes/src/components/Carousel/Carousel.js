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
    window.addEventListener("onbeforeunload", this.autoCounter());
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.autoCounter());
  }

  leftClick = () => {
    // console.log("Current IMG" + this.state.currentImg);
    const imgLength = this.state.carouselData.length - 1;
    this.setState(() => {
      // creating if statement to avoid going over the current amount of img in the array
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
    this.setState(() => {
      // creating if statement to avoid going over the current amount of img in the array
      if (this.state.currentImg <= imgLength) {
        return {
          currentImg: this.state.currentImg + 1
        };
      } else {
        return {
          currentImg: 0
        };
      }
    });
  };

  //creating an automatic carousel using componentDidMount to call the method
  autoCounter = () => {
    setInterval(() => this.rightClick(), 5000);
  };

  selectedImage = () => {
    return (
      <img
        // rendering the src base on the array of images and the idex set by the above functions < >
        src={this.state.carouselData[this.state.currentImg]}
        style={{ display: "block" }}
        alt={this.state.carouselData[this.state.currentImg]}
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
