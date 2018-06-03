import React, { Component } from 'react'
import './PersonCard.css';

import axios from 'axios';

import {API_NOTIFICATIONS} from '../../api';

export default class PersonCard extends Component {
  render() {
    return (
      <div onClick={e => this.putRequest(this.props.id, e)} key={this.props.id} className="person-card">
        <header style={{backgroundColor: this.props.color}} className="person-card__title">{this.toTitleCase(this.props.title)}</header>
        <p className="person-card__details">{this.props.details}</p>
      </div>
    )
  }

  toTitleCase = str =>
  {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  putRequest = (id, e) => {
    axios.put(API_NOTIFICATIONS(id))
    e.target.parentElement.style.display = 'none';
  }
}
