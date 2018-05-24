import React, { Component } from 'react';
import './index.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="game-board">
        <div className="top-buttons">
          <div className="button green-button" />
          <div className="button red-button" />
        </div>

        <div className="bottom-buttons">
          <div className="button yellow-button" />
          <div className="button blue-button" />
        </div>

        <div className="dashboard">
          <div className="white-bg">
            <h1 className="game-name mb-0">Simon</h1>
            <div className="controls">
              <div className="display">
                <div className="screen-frame">
                  <div className="screen">
                    <span className="count-output">--</span>
                  </div>
                </div>
                <p className="display-text text-uppercase mt-5">Count</p>
              </div>
              <div className="start-button">
                <div className="start-button-outline">
                </div>
                <p className="display-text text-uppercase mt-5">Start</p>
              </div>
              <div className="strict-mode-button">
                <div className="strict-mode-indicator">
                </div>
                <div className="strict-mode-button-outline">
                </div>
                <p className="display-text text-uppercase mt-5">Strict</p>
              </div>
            </div>
            <div className="on-off-switch">
              <p className="display-text text-uppercase">Off</p>

              <label class="switch ml-5">
                <input type="checkbox" />
                <span class="slider round" />
              </label>

              <p className="display-text ml-5 text-uppercase">On</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
