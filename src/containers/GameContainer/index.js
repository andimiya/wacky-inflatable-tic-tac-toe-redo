import React from 'react';
import Grid from '../../assets/grid.png';
import ChatBox from '../../components/ChatBox';
import SmallPlayer1 from '../../assets/small-player1.png';

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="game-container outer">
        <div className="game-container-inner">
          <div className="sidebar-container">
            <img src={SmallPlayer1} />
            <ChatBox />
          </div>
          <div className="grid-container">
            <img src={Grid} />
          </div>
        </div>
      </div>
    );
  }
};

export default GameContainer;
