import * as React from 'react';
import { View } from 'react-native';
import styles from './walkthrough.style';

const style = styles.mobileStyle;

const WalkthroughMobile = (props) => {
    return (
      <View>
         <View style={style.header}/>
         <View style={style.navzone}/>
      </View>
    );
}

export default WalkthroughMobile;
