import React, { Component } from 'react';
import ChatBox from '../../components/ChatBox';
import GameBoard from '../../components/GameBoard';
import SmallPlayer1 from '../../assets/small-player1.png';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: [],
      player2: [],
    };

    this.clickSelection = this.clickSelection.bind(this);
  }

  clickSelection(e) {
    console.log('click');
    switch(e.target.name) {
      case 'upper-left':
        this.setState ({
          player1: [1, 0, 0, 0, 0, 0, 0, 0, 0],
          player2: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        });
        break;
    }
  }

  render() {
    console.log(this.state, 'render state');
    return (
      <div className="game-container outer">
        <div className="game-container-inner">
          <div className="sidebar-container">
            <img src={SmallPlayer1} alt="Small player 1 image" />
            <ChatBox />
            <GameBoard
              click={this.clickSelection} />
          </div>

        </div>
      </div>
    );
  }
};

export default GameContainer;
