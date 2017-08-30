import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageHeaderSubText from '../../components/PageHeaderSubText';
import PageIntroText from '../../components/PageIntroText';
import AboutUsBody from '../../components/AboutUsBody';

const GameContainer = () => {
  return (
    <div className="about-us-container outer">
      <div className="header-container-outer">
        <div className="header-container div-container">
          <PageHeader title="About Us" />
          <PageHeaderSubText text="We love football and believe that fantasy sports decisions should be based off of data, not intuition." />
          <PageIntroText text="Get to know us. Now." />
        </div>
      </div>
      <AboutUsBody />
    </div>
  );
};

export default GameContainer;
