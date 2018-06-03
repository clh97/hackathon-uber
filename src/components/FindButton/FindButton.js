import React, { Component, Fragment } from 'react'
import heartIcon from '../../img/heart-icon.svg';
import './FindButton.css';

export default class FindButton extends Component {
  render() {
    return (
      <Fragment>
        <div className="heart-shadow"></div>
        <button onClick={this.props.onClick} className="heart-button">
          <img src={heartIcon} alt="heart" className="heart-button__logo"/>
        </button>
      </Fragment>
    )
  }
}
