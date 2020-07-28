import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'
import EsiDataStore from './store/esi-data'

import './app.less'
import {store} from "./store/store";

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
