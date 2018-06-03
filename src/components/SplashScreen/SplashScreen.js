import React, { Component } from 'react'
import classnames from 'classnames';
import unifyIcon from '../../img/unify-white.svg';
import './SplashScreen.css';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: true,
      display: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({shown: false}, () => {
        setTimeout(() => {
          this.setState({display: false});
        }, 200);
      });
    }, this.props.timeout)
  }

  render() {
    return (

      this.state.display && (
        <div className={classnames('splash-screen', !this.state.shown && 'splash-screen--hidden')}>
          <img className="splash-screen__logo" src={unifyIcon} />
        </div>
      )
      
    )
  }
}
