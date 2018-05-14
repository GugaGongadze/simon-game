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
            <h1 className="game-name">Simon</h1>
            <div className="controls">
              <div className="display">
                <p className="display-text">Count</p>
              </div>
              <div className="start-button">
                <p className="display-text">Start</p>
              </div>
              <div className="strict-mode-button">
                <p className="display-text">Strict</p>
              </div>
            </div>
            <div className="on-off-switch">
            <p className="display-text">Off</p>
            <p className="display-text">On</p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
