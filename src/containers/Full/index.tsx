import * as React from 'react';
import SideMenu from 'react-native-side-menu';
import Routing from '../../utils/routing';
import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';
const { Route, Switch } = Routing;
import Dashboard from '../../components/Dashboard';
import { View, Platform, Dimensions } from 'react-native';
import Aside from '../../components/Aside';

interface IState {
    isOpen: boolean;
    selectedItem: string;
}

const { width, height } = Dimensions.get('window');

class Full extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
            selectedItem: 'About'
        };
        this.toggle = this.toggle.bind(this);
    }

    public toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    public updateMenuState(isOpen) {
        this.setState({ isOpen });
    }

    public onMenuItemSelected = item =>
        this.setState({
            isOpen: false,
            selectedItem: item,
        });

    public render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

        return (
            <View>
                {
                    (Platform.OS === 'web') ?
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100vh',
                            alignSelf: 'stretch'
                        }}>
                            <Navbar />
                            <Aside />
                            <View style={{ marginLeft: width * 0.25, padding: 20 }}>
                                <Switch>
                                    <Route path="/" name="Dashboard" component={Dashboard} />
                                </Switch>
                            </View>
                        </View>
                        :
                        <View style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            height: height,
                        }}>
                            <SideMenu
                                menu={menu}
                                isOpen={this.state.isOpen}
                                onChange={this.updateMenuState}
                            >
                                <Navbar />
                            </SideMenu>
                            <View>
                                <Switch>
                                    <Route path="/" name="Dashboard" component={Dashboard} />
                                </Switch>
                            </View>
                        </View>
                }
            </View>
        );
    }
}

export default Full;
