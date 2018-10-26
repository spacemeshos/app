import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './walkthrough.style';
import Button from '../Button';
const style = styles.webStyle;

const click = () => {
    alert('Hello')
}

const WalkthroughWeb = (props) => {
    return (
      <View style={style.root}>
         <View style={style.logo}>
            <Image source={require('../../images/SM_logo_green@2x.png')} />
         </View>
         <View style={style.info}>
             <Text style={style.title}>Discover new <b>Economy</b></Text>
             <Text style={style.description}>Spacemesh is a fair blockmesh</Text>
             <Text style={style.description}>operating system</Text>
         </View>
         <View style={style.buttons}>
           <Button onClick={click} clear={true} title='Restore wallet'/>
           <Button onClick={click} title='Create wallet'/>
         </View>
      </View>
    );
}

export default WalkthroughWeb;
