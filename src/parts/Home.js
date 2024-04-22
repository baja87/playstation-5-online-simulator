import React, { Component } from "react";
import Canvas from "./Canvas.js";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: this.props.settings,
    };
  }

  render() {
    return (
      <div className="ps5-home">
        {this.state.animation ? (
          <>
            <Canvas settings={this.props.settings} />

            <div className="ps5-home-content">
              <p>Click the button to Start</p>

              <a
                href="#start"
                className="ps5-btn ps5-btn-mono ps5-btn-lg focus ps5-home-btn"
                onClick={() => this.props.onClick()}
              >
                <i className="material-icons">power_settings_new</i>
                <div className="ps5-shine focus"></div>
                <div className="ps5-shine focus"></div>
                <div className="ps5-shine focus"></div>
              </a>
            </div>
          </>
        ) : (
          <div className="ps5-home-content">
            <div>
              <p>Buy $PS5 On Pump.Fun</p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ps5-link"
                  href="https://pump.fun/board"
                >
                  BUY
                </a>
               
              </p>
              <p >Press Continue to Play PS5</p>
            </div>

            <a
              href="#next"
              className="ps5-btn ps5-btn-primary"
              onClick={() => this.setState({ animation: true })}
            >
              Continue
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
