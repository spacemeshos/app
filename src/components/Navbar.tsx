import * as React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    header: {
        height: (Platform.OS === 'web') ? '66px' : 66,
        backgroundColor: '#fff',
        padding: (Platform.OS === 'web') ? '20px' : 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    logo: {
        flexGrow: 1
    },
    help: {
        flexGrow: 4
    },
    network: {
        flexGrow: 0
    }
})


class Navbar extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Text style={{ color: '#00C28C' }}>Spacemesh</Text>
                </View>
                <View style={styles.help}>
                    <Text style={{ color: '#00C28C' }}>Help</Text>
                </View>
                <View style={styles.network}>
                    <Text style={{ color: '#00C28C' }}>Mainnet | Connected</Text>
                </View>
            </View>
        );
    }
}


export default Navbar;

