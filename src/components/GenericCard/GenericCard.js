import React, { Component } from 'react'
import './GenericCard.css';

export default class GenericCard extends Component {
  render() {
    return (
      <article className="generic-card">
        <h2 className="generic-card__title">{this.props.title}</h2>
        <p className="generic-card__details">{this.props.details}</p>
        {this.props.button && <button className="generic-card__button">Estamos Juntxs!</button>}
      </article>
    )
  }
}
