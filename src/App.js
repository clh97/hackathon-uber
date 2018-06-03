import React, {Component, Fragment} from 'react';
import axios from 'axios';

import {API_USERS} from './api';

import './App.css';

import SplashScreen from './components/SplashScreen/SplashScreen';
import Loading from './components/Loading/Loading';

import Home from './components/Home/Home';
import Persons from './components/Persons/Persons';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: undefined,
      render: <Home search={() => this.search()}/>
    }
  }

  render() {
    return (
      <Fragment>
        <SplashScreen timeout={2500}/>
        <div className="app">
          {this.state.render}
        </div>
        {this.state.loading && <Loading data={this.state.data}/>
}
      </Fragment>
    );
  }

  search = () => {
    this.setState({
      loading: true
    }, () => {
      setTimeout(() => {
        axios
          .get(API_USERS)
          .then(d => {
              const newArr = d.data.filter(item => item.notificacao !== false)

              if(newArr !== undefined)
                this.setState({data: newArr});
              this.search();
            }
          )
          .then(e => {
            this.setState({render: <Persons data={this.state.data}/> })
          })
      }, 750);
    })
  }

}

export default App;
