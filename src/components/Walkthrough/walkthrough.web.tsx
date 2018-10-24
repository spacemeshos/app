import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './walkthrough.style';
import Button from '../Button';
const style = styles.webStyle;

const click = () => {
    alert('Hello')
}

const WalkthroughWeb = (props) => {
    return (
      <View style={style.root}>
         <View>
             <Text>Discover new Economy</Text>
             <Text>Spacemesh is a fair blockmesh operating system</Text>
         </View>
         <View>
           <Button onClick={click()}>
              <Text>Text</Text>
           </Button>
           <Button onClick={click()}>
               <Text>Text</Text>
           </Button>
         </View>
      </View>
    );
}

export default WalkthroughWeb;
