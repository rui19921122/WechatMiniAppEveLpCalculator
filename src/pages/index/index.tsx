import React, {Component} from 'react'
import {Button, Navigator, View} from '@tarojs/components'
import {observer, inject} from 'mobx-react'

import './index.less'
import {store} from "../../store/store";

interface Index {
  props: { store: typeof store }
}

@inject('store')
@observer
class Index extends Component {
  componentWillMount() {
  }

  componentDidMount() {
    console.log(this.props.store)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View>
        <Button onClick={()=>this.props.store.esiDataStore.updateEsiData()}>更新缓存</Button>
        <Navigator url='pages/corporation-select/index' openType='navigate'>123</Navigator>
      </View>
    )
  }
}

export default Index
