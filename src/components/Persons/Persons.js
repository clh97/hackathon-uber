import React, {Component, Fragment} from 'react'

import axios from 'axios';

import {API_USERS} from '../../api';

import PersonCard from '../PersonCard/PersonCard';
import Header from '../Header/Header';
import FindButton from '../FindButton/FindButton';

const colors = [
  '#ff69b4',
  '#ff0402',
  '#ff8e03',
  '#ffd639',
  '#008e02',
  '#00c0c0',
  '#400098',
  '#8d008e'
];

export default class componentName extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data
    }
  }

  render() {
    return (
      <Fragment>
        {
          this.state.data.length > 0 ? this.state.data
            .map((item, i) => <PersonCard color={colors[i]} id={item.id} title = { item.nome } details = "Sinta-se abraçado e seguro, estamos juntos!" />)
          : this.search()
        }
        <Header/>
        <FindButton onClick={() => this.search()}/>
      </Fragment>
    )
  }

  search = () => {
    setTimeout(() => {
      axios
        .get(API_USERS)
        .then(d => {
          const newArr = d
            .data
            .filter(item => item.notificacao !== false)
          this.search();
          console.dir(newArr)
          if(newArr.length > 0)
            this.setState({data: newArr})
        })
    }, 1500)
  }
}