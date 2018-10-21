import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from './Navbar';


const styles = StyleSheet.create({
    sidebar: {
        backgroundColor: '#000',
        width: 200,
        minHeight: '100vh',
        position: 'absolute',
        top: 0,
        bottom: 0,
        zIndex: -999,
    }
})

const Aside = () => (
    <View>
        <Navbar />
        <View style={styles.sidebar}>
            <Text>Hello World</Text>
        </View>
    </View>
);

export default Aside;