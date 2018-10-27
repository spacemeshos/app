import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

const style = (props) => StyleSheet.create({
    root: {
        width: 138.99,
        height: 44.15,
        backgroundColor: props.clear ? colors.white : colors.caribbeanGreen,
        borderColor: props.clear ? colors.caribbeanGreen : 'none',
        borderWidth: props.clear ? 2 : 0,
        borderRadius:2,
        padding: 0,
        margin:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        color: props.clear ? colors.caribbeanGreen : colors.white,
        fontFamily: fonts.font.default,
        fontSize: fonts.size.small,
        fontWeight: 'bold',
    },
});

export default style;
