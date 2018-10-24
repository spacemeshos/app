import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const webStyle = StyleSheet.create({
    root:{
        height: 375.79,
        width: 388.66,
        backgroundColor: colors.white,
    }
}); 

const mobileStyle = StyleSheet.create({}); 


const styles = {
    webStyle,
    mobileStyle,
}

export default styles;
