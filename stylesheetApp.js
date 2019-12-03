import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  viewWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },

  img: {
    width: '100%',
    height: 200
  },

  text: {
    position: 'absolute',
    top: 300,
    left: 0
  },

  button: {
    width: 100,
    height: 80,
    marginTop: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles