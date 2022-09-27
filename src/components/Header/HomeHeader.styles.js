import {StyleSheet} from 'react-native';
import color from "../../general/colors";

const styles=StyleSheet.create({
  container:{
    //marginLeft: 12,
    backgroundColor: color.whiteColor,
    padding: 12,
    /*shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 2},
    shadowRadius: 3,*/
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  titleView:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  button:{
    backgroundColor: '#ffffffff',
    marginLeft: -12
  },
  title:{
    fontWeight: 'bold',
    fontSize: 18,
    color: color.titleColor,
    textAlign:'center',
    flexWrap: 'wrap'
  }
})

export default styles;
