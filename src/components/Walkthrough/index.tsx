import * as React from 'react';
import WalkThroughWeb from './walkthrough.web';
import WalkThroughMobile from './walkthrough.mobile';
import { Platform } from 'react-native';

const WalkThrough = () => {
    return (
        Platform.OS === 'web' ?    
        <WalkThroughWeb/> : <WalkThroughMobile/>        
    );
}

export default WalkThrough;
