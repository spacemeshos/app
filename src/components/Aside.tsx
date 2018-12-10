import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    sidebar: {
        width: width * 0.25,
        minHeight: height - 66,
        position: 'absolute',
        top: 0,
        bottom: 0,
        borderRightColor: 'rgba(0, 0, 0, 0.3)',
        borderRightWidth: 1,
        borderStyle: 'solid',
        zIndex: -999,
    }
})

const Aside = () => (
    <View>
        <View style={styles.sidebar}>
        <View style={{
            marginTop: 33,
        }}>
            <Text style={{
                padding: 20
            }}>Home</Text>
        </View>
        </View>
    </View>
);

export default Aside;