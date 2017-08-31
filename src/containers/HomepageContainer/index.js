import React from 'react';
import { Link } from 'react-router-dom';

import title from '../../assets/title.png';
import pandaBody from '../../assets/panda-body.png';
import bunnyBody from '../../assets/bunny-body.png';
import pandaRight from '../../assets/panda-right.png';
import pandaLeft from '../../assets/panda-left.png';
import bunnyRight from '../../assets/bunny-right.png';
import bunnyLeft from '../../assets/bunny-left.png';
import startButton from '../../assets/start.png';

class HomepageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage-container-outer">
        <div className="homepage-container">
          <div className="title-container">
            <img className="title" src={title} />
          </div>
          <div className="animals-container">
            <div className="panda-container">
                <img className="panda-body" src={pandaBody} />
                <img className="panda-right" src={pandaRight} />
                <img className="panda-left" src={pandaLeft} />
            </div>
            <Link to="/play">
              <img className="start-button" src={startButton} />
            </Link>
            <div className="bunny-container">
              <img className="bunny-body" src={bunnyBody} />
              <img className="bunny-right" src={bunnyRight} />
              <img className="bunny-left" src={bunnyLeft} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomepageContainer;
