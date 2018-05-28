import React, { Component } from 'react';
import './index.css';
import redSound from '../Sounds/simonSound1.mp3';
import blueSound from '../Sounds/simonSound2.mp3';
import yellowSound from '../Sounds/simonSound3.mp3';
import greenSound from '../Sounds/simonSound4.mp3';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameOn: false,
      strictModeEnabled: false,
      gameStarted: false,
      count: null,
      level: 0,
      currentSteps: []
    };

    this.redButton = React.createRef();
    this.blueButton = React.createRef();
    this.yellowButton = React.createRef();
    this.greenButton = React.createRef();

    this.onSwitchChange = this.onSwitchChange.bind(this);
    this.onGameStart = this.onGameStart.bind(this);
  }

  onSwitchChange = () => {
    if (this.state.gameOn === false) {
      this.setState({
        gameOn: true
      });
    } else {
      this.setState({
        gameOn: false,
        strictModeEnabled: false,
        gameStarted: false,
        count: null
      });
    }
  };

  onGameStart = () => {
    if (this.state.gameOn) {
      if (this.state.gameStarted) {
        this.setState({
          count: 0,
          currentSteps: []
        })
      } else {
        this.setState({
          gameStarted: true,
          count: 0
        });
        this.playSound(chooseRandomColor());
      }
    }

  };

  playSound = (color) => {
    if (color === 'red') {
      this.redButton.current.play()
    } else if (color === 'blue') {
      this.blueButton.current.play()
    } else if (color === 'yellow') {
      this.yellowButton.current.play()
    } else if (color === 'green') {
      this.greenButton.current.play()
    }

    this.setState(prevState => ({
      count: prevState.count + 1,
      currentSteps: [...prevState.currentSteps, color]
    }))
  }

  render() {
    return (
      <div className="game-board">
        <div className="top-buttons">
          <div className="button green-button">
            <audio ref={this.greenButton} src={greenSound} />
          </div>
          <div className="button red-button">
            <audio ref={this.redButton} src={redSound} />
          </div>
        </div>
        <div className="bottom-buttons">
          <div className="button yellow-button">
            <audio ref={this.yellowButton} src={yellowSound} />
          </div>
          <div className="button blue-button">
            <audio ref={this.blueButton} src={blueSound} />
          </div>
        </div>

        <div className="dashboard">
          <div className="white-bg">
            <h1 className="game-name mb-0">Simon</h1>
            <div className="controls">
              <div className="display">
                <div className="screen-frame">
                  <div className="screen">
                    <span className="count-output">
                      {this.state.gameOn === true
                        ? this.state.gameStarted
                          ? this.state.count
                          : '--'
                        : this.state.gameOn}
                    </span>
                  </div>
                </div>
                <p className="display-text text-uppercase mt-5">Count</p>
              </div>
              <div className="start-button" onClick={this.onGameStart}>
                <div className="start-button-outline" />
                <p className="display-text text-uppercase mt-5">Start</p>
              </div>
              <div className="strict-mode-button">
                <div className="strict-mode-indicator" />
                <div className="strict-mode-button-outline" />
                <p className="display-text text-uppercase mt-5">Strict</p>
              </div>
            </div>
            <div className="on-off-switch">
              <p className="display-text text-uppercase">Off</p>

              <label className="switch ml-5">
                <input type="checkbox" onChange={this.onSwitchChange} />
                <span className="slider round" />
              </label>

              <p className="display-text ml-5 text-uppercase">On</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function chooseRandomColor() {
  const randomNumber = Math.round(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return 'red';
  } else if (randomNumber === 2) {
    return 'blue';
  } else if (randomNumber === 3) {
    return 'yellow';
  } else {
    return 'green';
  }
}

export default Game;
