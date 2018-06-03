import React, {Component} from 'react'
import classnames from 'classnames';

import './Loading.css';

export default class Loading extends Component {

  constructor(props) {
    super(props);

    this.state = {
      classes: undefined
    }
  }

  render() {
    return (
      <div className={classnames(this.state.classes, this.props.data !== undefined && 'loading--hidden')}>
        <svg className="loading__image" width="231" height="231" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 13.3C0 5.9 6 0 13.6 0h21.8C42.9 0 49 6 49 13.3v13.2c0 1.5-1.2 2.7-2.7 2.7H2.7A2.7 2.7 0 0 1 0 26.5V13.3zm13.6-8a8 8 0 0 0-8.2 8v10.6h38.2V13.3a8 8 0 0 0-8.2-8H13.6z"
            transform="translate(91 116.8)"
            fill="url(#paint0_linear)"/>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 13.3C0 5.9 6 0 13.6 0c7.5 0 13.6 6 13.6 13.3 0 7.3-6 13.2-13.6 13.2-7.5 0-13.6-6-13.6-13.2zm13.6-8a8 8 0 0 0-8.2 8 8 8 0 0 0 8.2 8 8 8 0 0 0 8.2-8 8 8 0 0 0-8.2-8z"
            transform="translate(101.9 85)"
            fill="url(#paint1_linear)"/>
          <circle id="loading-circle"
            cx="115.5"
            cy="115.5"
            r="81.5"
            transform="rotate(-28.6 160.9 39.1)"
            stroke="url(#paint2_linear)"
            strokeWidth="6"/>
          <defs>
            <linearGradient
              id="paint0_linear"
              x2="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(49 0 0 82.951 0 -12.3)">
              <stop stopColor="#fff"/>
              <stop offset="1" stopColor="#fff" stopOpacity="0"/>
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x2="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(25.48 0 0 26.36 .9 13.3)">
              <stop stopColor="#fff"/>
              <stop offset="1" stopColor="#fff" stopOpacity="0"/>
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x2="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(-2.7 488.4 864.8) scale(180.201)">
              <stop stopColor="#fff"/>
              <stop offset="1" stopColor="#fff" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        classes: classnames('loading', 'loading--shown')
      })
    }, 300);
  }
}
