import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageHeaderSubText from '../../components/PageHeaderSubText';
import PageIntroText from '../../components/PageIntroText';


class HomepageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="homepage-container">
        <div className="header-container-outer outer">
          <div className="header-container div-container">
            <PageHeader title="Better Odds of Football" />
            <PageHeaderSubText text="Football - Stats - Blog" />
            <PageIntroText text="See some of our rants below" />
          </div>
        </div>
      </div>
    );
  }
}

export default HomepageContainer;
