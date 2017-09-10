import React, { Component } from 'react';
import Grid from '../assets/grid.png';
import { Link } from 'react-router-dom';

const GameBoard = props => {
  return (
    <div className="gameboard-container">
      <div className="grid-container">
        <img src={Grid} alt="Grid container lines"/>
        <div className="gameboard">
          <div className="cell-1">
            <button onClick={props.click} name='upper-left'>Z</button>
          </div>
          <div className="cell-1">
            <button onClick={props.click} name='upper-mid'>Z</button>
          </div>
          <div className="cell-1">
            <button onClick={props.click} name='upper-right'>Z</button>
          </div>
          <div className="cell-1">
            <button onClick={props.click} name='mid-left'>Z</button>
          </div>
          <div className="cell-1">
            <button onClick={props.click} name='mid-mid'>Z</button>
          </div>
          <div className="cell-1">
            <button onClick={props.click} name='mid-right'>Z</button>
          </div>
          <div className="cell-1">
            <button onClick={props.click} name='bottom-left'>Z</button>
          </div>
          <div className="cell-1">
            <button onClick={props.click} name='bottom-mid'>Z</button>
          </div>
          <div className="cell-1">
            <button onClick={props.click} name='bottom-right'>Z</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
