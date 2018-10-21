import * as React from 'react';
import { Text, View } from 'react-native';

// interface IProps {}

// interface IState {}

class Dashboard extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View>
                <Text>Dashboard here</Text>
            </View>
        )
    }
}

export default Dashboard;