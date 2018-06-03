import React, {Component, Fragment} from 'react'

import GenericCard from '../GenericCard/GenericCard';
import Header from '../Header/Header';
import FindButton from '../FindButton/FindButton';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <GenericCard title="Olá Tuxu!" details="Está tudo sob controle ao seu redor, aproveite o momento."/>
        <Header/>
        <FindButton onClick={() => this.props.search()} />
      </Fragment>
    )
  }
}
