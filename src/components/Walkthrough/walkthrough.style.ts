import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

const webStyle = StyleSheet.create({
    root: {
        margin:10,
        height: 375.79,
        width: 388.66,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: colors.black,
    },
    logo: {
        flex:1,
    },
    info: {
        flex:2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: fonts.size.xxlarge,
        fontWeight: fonts.weight.medium,
        marginBottom:30,
    },
    description: {
        fontSize: fonts.size.medium,
        color: colors.osloGray,
    },
    buttons: {
        flex:2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
}); 

const mobileStyle = StyleSheet.create({
    root: {
        flex:1,
    },
    header: {
        flex:3,
        backgroundColor: colors.caribbeanGreen,
    },
    navzone: {
        flex:1,
        backgroundColor: colors.white,
    } 
}); 


const styles = {
    webStyle,
    mobileStyle,
}

export default styles;
