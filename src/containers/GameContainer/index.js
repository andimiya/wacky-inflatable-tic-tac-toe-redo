import React, { Component } from 'react';
import ChatBox from '../../components/ChatBox';
import GameBoard from '../../components/GameBoard';
import SmallPlayer1 from '../../assets/small-player1.png';

class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTurn: 1,
      upperLeft: null,
      upperMid: null,
      upperRight: null,
      midLeft: null,
      midMid: null,
      midRight: null,
      bottomLeft: null,
      bottomMid: null,
      bottomRight: null
    };

    this.clickSelection = this.clickSelection.bind(this);
    this.switchPlayer = this.switchPlayer.bind(this);
  }

  switchPlayer() {
    console.log('switchPlayer');
  }

  clickSelection(e) {
    let player = 'player1';

    console.log('click');
    switch(e.target.name) {
      case 'upper-left':
        this.setState ({
          upperLeft: {player}
        });
        this.switchPlayer();
        break;
      case 'upper-mid':
        this.setState ({
          upperMid: {player}
        });
        break;
      case 'upper-right':
        this.setState ({
          upperRight: {player}
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
              click={this.clickSelection}
              player={this.playerTurn} />
          </div>
        </div>
      </div>
    );
  }
};

export default GameContainer;
