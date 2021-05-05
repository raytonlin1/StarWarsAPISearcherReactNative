import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: 'blue',
    fontWeight: 'bold',
    padding: 8,
    margin: 1,
    borderColor: '#282c34',
    borderWidth: 3,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
  smallbutton: {
    color: 'black',
    fontWeight: 'bold',
    borderColor: '#282c34',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
  app: {
    alignItems: "stretch",
    backgroundColor: 'beige',
    flexDirection: 'column',
    flex: 1,
  },
  texthead: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  reg: {
    fontSize: 10,
  },
  navbarcss: {
    backgroundColor: "orangered",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footercss: {
    alignItems: "center",
    backgroundColor: "#282c34",
    justifyContent: 'center',
    padding: 2,
  },
  textcss: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headercss: {
    alignItems: "center",
    backgroundColor: "#282c34",
    minHeight: 100,
    textAlign: 'center',
    justifyContent: 'center',
  },
  textheader: {
    color: 'white',
    fontWeight: 'bold',
  },
  useAPI: {
    backgroundColor: 'wheat',
    flexDirection: 'column',
    alignText: 'center',
    justifyContent: 'center',
    padding: 10,
  }
});

export default styles