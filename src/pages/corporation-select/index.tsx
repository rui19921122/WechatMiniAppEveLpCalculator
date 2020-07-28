import {View, Button, Text} from '@tarojs/components'
import {observer, inject} from 'mobx-react'
import React, {Component} from 'react'

import './index.less'

@inject('store')
@observer
class CorporationSelect extends Component {
  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  increment = () => {
    const {counterStore} = this.props.store
    counterStore.increment()
  }

  decrement = () => {
    const {counterStore} = this.props.store
    counterStore.decrement()
  }

  incrementAsync = () => {
    const {counterStore} = this.props.store
    counterStore.incrementAsync()
  }

  render() {
    const {counterStore: {counter}} = this.props.store
    return (
      <View className='corporation-select'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
      </View>
    )
  }
}

export default CorporationSelect
