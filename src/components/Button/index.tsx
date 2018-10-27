import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import style from './Button.style';

export interface IProps {
    onClick;
    title: string,
    clear?: boolean;
    children?: React.ReactChild[] | React.ReactChild;
};

const Button = (props:IProps) => {
    const styles = style(props);
    const { onClick, title } = props;
    return (
        <TouchableOpacity onPress={onClick}>
            <View style={styles.root}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Button;
