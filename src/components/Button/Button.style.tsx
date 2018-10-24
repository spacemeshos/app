import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const style = (props) => StyleSheet.create({
    root: {
        width: 138.99,
        height: 44.15,
        backgroundColor: props.clear ? colors.white : colors.caribbeanGreen,
        borderColor: props.clear ? colors.caribbeanGreen : 'none',
        borderWidth: props.clear ? 2 : 0,
        borderRadius:2,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default style;
