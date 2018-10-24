import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import style from './Button.style';

export interface IProps {
    onClick;
    clear?: boolean;
    children?: React.ReactChild[] | React.ReactChild;
};

const Button = (props:IProps) => {
    const styles = style(props);
    const { onClick, children } = props;
    return (
        <TouchableOpacity onPress={onClick}>
            <View style={styles.root}>
                {children}
            </View>
        </TouchableOpacity>
    );
}

export default Button;
