import React, { Component } from 'react'
import projectLogo from '../../img/unify-purple.svg';
import settingsGear from '../../img/settings.svg';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <nav className="header">
        <img className="header__logo" src={projectLogo} />
        <img className="header__gear" src={settingsGear} />
      </nav>
    )
  }
}
