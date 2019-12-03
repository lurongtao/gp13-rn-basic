import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native'

// import {
//   ViewWrap
// } from './styledApp'

import styles from './stylesheetApp'

class App extends React.Component {
  render() {
    let uri = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    return (
      <View style={styles.viewWrap}>
        <Text style={styles.text}>aaaaaaa</Text>
        <Image 
          source={{uri}} 
          className="img"
          style={styles.img}
        ></Image>
        <TextInput
          defaultValue="hello"
          placeholder="请输入..."
          keyboardType="twitter"
          onChangeText={(text) => {
            console.log(text)
          }}
        ></TextInput>
        <TouchableOpacity
          onPress={() => console.log(0)}
          style={styles.button}
          activeOpacity={0.5}
          underlayColor="gray"
        >
          <View>
            <Text>click</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default App